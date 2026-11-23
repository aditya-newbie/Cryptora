import type { ChartData } from "../types/Coin";
import type { CategoryMarkets } from "../types/Dashboard";
import type MarketCoin from "../types/MarketCoin";
import type { TrendingResponse } from "../types/TrendingCoin";

export function filterCategory(
  category: string,
  categories: CategoryMarkets | undefined,
  market: MarketCoin[] | undefined,
): MarketCoin[] {
  const allMarket = market ?? [];

  if (!categories) {
    return allMarket;
  }

  switch (category) {
    case "all":
      return allMarket;
    case "layer-1":
      return categories.layer1;
    case "layer-2":
      return categories.layer2;
    case "decentralized-finance-defi":
      return categories.defi;
    case "meme-token":
      return categories.memeCoins;
    case "gaming":
      return categories.gaming;
    case "stablecoins":
      return categories.stablecoins;
    case "real-world-assets-rwa":
      return categories.rwa;
    case "privacy-coins":
      return categories.privacyCoins;
    default:
      return allMarket;
  }
}

export function filterMarketCap(
  marketCap: string,
  market: MarketCoin[] | undefined,
): MarketCoin[] {
  const coins = market ?? [];

  switch (marketCap) {
    case "large-cap":
      return coins.filter((coin) => coin.market_cap !== null && coin.market_cap >= 8_300_000_000_000);
    case "mid-cap":
      return coins.filter(
        (coin) => coin.market_cap !== null && coin.market_cap >= 830_000_000_000 && coin.market_cap < 8_300_000_000_000,
      );
    case "small-cap":
      return coins.filter((coin) => coin.market_cap !== null && coin.market_cap < 830_000_000_000);
    default:
      return coins;
  }
}

export function filter24hChange(
  change: string,
  market: MarketCoin[] | undefined,
): MarketCoin[] {
  const coins = market ?? [];

  switch (change) {
    case "gainers":
      return coins.filter((coin) => coin.price_change_percentage_24h > 0);
    case "losers":
      return coins.filter((coin) => coin.price_change_percentage_24h < 0);
    case "strong-gainers":
      return coins.filter((coin) => coin.price_change_percentage_24h >= 5);
    case "strong-losers":
      return coins.filter((coin) => coin.price_change_percentage_24h <= -5);
    default:
      return coins;
  }
}

export function filterVolume24h(
  volume: string,
  market: MarketCoin[] | undefined,
): MarketCoin[] {
  const coins = market ?? [];

  switch (volume) {
    case "high":
      return coins.filter((coin) => coin.total_volume !== null && coin.total_volume >= 1_000_000_000);
    case "medium":
      return coins.filter((coin) => coin.total_volume !== null && coin.total_volume >= 100_000_000 && coin.total_volume < 1_000_000_000);
    case "low":
      return coins.filter((coin) => coin.total_volume !== null && coin.total_volume < 100_000_000);
    default:
      return coins;
  }
}

export function filterTabPill(
  tab: string,
  market: MarketCoin[] | undefined,
  trending?: TrendingResponse | undefined,
): MarketCoin[] {
  const coins = market ?? [];

  switch (tab) {
    case "trending": {
      if (!trending?.coins) return coins;
      const trendingIds = new Set(trending.coins.map((c) => c.item.id));
      return coins.filter((coin) => trendingIds.has(coin.id));
    }
    case "gainers":
      return [...coins]
        .filter((coin) => (coin.price_change_percentage_24h ?? 0) > 0)
        .sort((a, b) => (b.price_change_percentage_24h ?? 0) - (a.price_change_percentage_24h ?? 0));
    case "losers":
      return [...coins]
        .filter((coin) => (coin.price_change_percentage_24h ?? 0) < 0)
        .sort((a, b) => (a.price_change_percentage_24h ?? 0) - (b.price_change_percentage_24h ?? 0));
    case "new-listings":
      return [...coins].sort(
        (a, b) => new Date(b.atl_date ?? 0).getTime() - new Date(a.atl_date ?? 0).getTime(),
      );
    case "all":
    default:
      return coins;
  }
}

export function convertChartData(data: number[] | undefined | null) {
  if (!data) {
    return [];
  }
  return data.map((value, i) => ({ price: value, time: i }));
}

export function getBarChartData(data: ChartData[]) {
  const barSize = Math.round(data.length/60); 
  const barChartData = [];
  let barPrice:number =  0;

  for (let i = 0; i < data.length; i++) {
    barPrice += data[i].price

    if ((i+1) % barSize === 0) {
      const price = barPrice/barSize;
      barChartData.push({time: data[i].time, price})
      barPrice = 0;
    }
  }

  return barChartData;
}