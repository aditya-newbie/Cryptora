import type { TrendingResponse } from "../types/TrendingCoin";
import type { CategoryMarkets } from "../types/Dashboard";
import type GlobalMarketResponse from "../types/GlobalMarket";
import type MarketCoin from "../types/MarketCoin";
import type { ApiMarketData, CoinDetail, MarketChartData } from "../types/Coin";


const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY

function fetchCoinGecko(url: string) {
  return fetch(url, {
    headers: {
      "x-cg-demo-api-key": API_KEY,
    },
  });
}

export async function fetchGlobal(): Promise<GlobalMarketResponse> {
  const res = await fetchCoinGecko("https://api.coingecko.com/api/v3/global?vs_currency=inr");

  if (!res.ok) {
    throw new Error("Failed to fetch global data")
  }


  return res.json();
}

export async function fetchMarket(): Promise<MarketCoin[]> {

  const res = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h,24h,7d");

  if (!res.ok) {
    throw new Error("Failed to fetch market data")
  }


  return res.json();
}

export async function fetchCategory(): Promise<CategoryMarkets> {

  const layer1 = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=layer-1");
  const layer2 = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=layer-2");
  const defi = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=decentralized-finance-defi");
  const memeCoins = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=meme-token");
  const gaming = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=gaming");
  const stableCoins = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=stablecoins");
  const rwa = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=real-world-assets-rwa");
  const privacyCoins = await fetchCoinGecko("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=privacy-coins");

  const allCategoriesLoaded =
    layer1.ok &&
    layer2.ok &&
    defi.ok &&
    memeCoins.ok &&
    gaming.ok &&
    stableCoins.ok &&
    rwa.ok &&
    privacyCoins.ok;

  if (!allCategoriesLoaded) {
    throw Error("Failed to fetch market category data")
  }

  return {
    layer1: await layer1.json(),
    layer2: await layer2.json(),
    defi: await defi.json(),
    memeCoins: await memeCoins.json(),
    gaming: await gaming.json(),
    stablecoins: await stableCoins.json(),
    rwa: await rwa.json(),
    privacyCoins: await privacyCoins.json(),
  };
}



export async function fetchTrending(): Promise<TrendingResponse> {
  const res = await fetchCoinGecko("https://api.coingecko.com/api/v3/search/trending?vs_currency=inr");

  if (!res.ok) {
    throw new Error("Failed to fetch trending data")
  }

  return res.json();
}

export async function fetchCoinMarket(coinId: string | undefined, days: string):
  Promise<MarketChartData> {
  if (!coinId) {
    throw new Error("Coin id is not defined")
  }
  const coinMarketData = await fetchCoinGecko(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=${days}`)
  if (!coinMarketData.ok) {
    throw new Error("Failed to fetch asset market")
  }
  const data: Record<string, ApiMarketData> = await coinMarketData.json()

  const updatedData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, (
      value.map(([time, price]) => ({ time: time, price: price }))
    )]).map(([key, value]) => [key === "prices" ? "price" : key, value])
  )

  return updatedData

}

export async function fetchCoinDetail(coinId: string | undefined): Promise<CoinDetail> {
  if (!coinId) {
    throw new Error("Coin id is not defined")
  }

  const coinData = await fetchCoinGecko(`https://api.coingecko.com/api/v3/coins/${coinId}?vs_currency=inr`)

  if (!coinData.ok) {
    throw new Error("Failed to fetch asset details")
  }

  return coinData.json()
}
