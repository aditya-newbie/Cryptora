import type MarketCoin from "../../types/MarketCoin"

const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY

export default async function fetchMarket(): Promise<MarketCoin[]> {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h,24h,7d",
  {
    headers: {
      "x-cg-demo-api-key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch market data")
  }

  return res.json();
}