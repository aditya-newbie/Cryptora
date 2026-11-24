import type MarketCoin from "../types/MarketCoin";
import type { ChartData } from "../types/Coin";

interface MarketBreadth {
  advancing: number,
  declining: number,
}

export function getMarketBreadth(market: MarketCoin[] | undefined): MarketBreadth {

  if (!market) {
    throw new Error("Market is undefined")
  }

  const total = market.length;
  const advancing = Number(((market.filter(coin => {
    if (!coin.price_change_percentage_24h_in_currency) return
    return coin.price_change_percentage_24h_in_currency >= 0
  }).length) / total * 100).toFixed(2))

  const declining = 100 - advancing;

  return {
    advancing,
    declining
  }
}

export function getRsiData(data: ChartData[], time: string): ChartData[] {

  const period: number = 14;


  if (!Number.isInteger(period) || period <= 0) {
    throw new RangeError("RSI period must be a positive integer");
  }

  if (data.length < period + 1) return [];

  let averageGain = 0;
  let averageLoss = 0;

  for (let i = 1; i <= period; i++) {
    const priceChange = data[i].price - data[i - 1].price;

    if (priceChange > 0) {
      averageGain += priceChange;
    } else {
      averageLoss += Math.abs(priceChange);
    }
  }

  averageGain /= period;
  averageLoss /= period;

  const rsiData: ChartData[] = [];

  for (let i = period; i < data.length; i++) {
    if (i > period) {
      const priceChange = data[i].price - data[i - 1].price;
      let gain = 0;
      let loss = 0;

      if (priceChange > 0) {
        gain = priceChange;
      } else {
        loss = Math.abs(priceChange);
      }

      // Smooth the averages using the previous period's values.
      averageGain = (averageGain * (period - 1) + gain) / period;
      averageLoss = (averageLoss * (period - 1) + loss) / period;
    }

    let rsi: number;

    if (averageGain === 0 && averageLoss === 0) {
      rsi = 50;
    } else if (averageLoss === 0) {
      rsi = 100;
    } else {
      const relativeStrength = averageGain / averageLoss;
      rsi = 100 - 100 / (1 + relativeStrength);
    }

    rsiData.push({ time: data[i].time, price: rsi });
  }


  if (time === "24H") {
    return rsiData.slice(-24);
  } else if (time === "7D" || time === "90D") {
    return rsiData.slice(-168);
  } else if (time === "30D") {
    return rsiData.slice(-168)
  } else {
    return rsiData
  }
}

export function getCurrentRsi(data: ChartData[] | undefined, time: string | undefined): string | null {
  if (!data || !time) return null;
  const rsiData = getRsiData(data, time);

  if (rsiData.length === 0) return null;

  return rsiData[rsiData.length - 1].price.toFixed(2);
}