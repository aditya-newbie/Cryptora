import type MarketCoin from "../types/MarketCoin";

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
  }).length)/total*100).toFixed(2))

  const declining = 100 - advancing;

  return {
    advancing,
    declining
  }
}