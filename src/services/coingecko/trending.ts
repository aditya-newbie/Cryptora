import type {TrendingResponse} from "../../types/TrendingCoin";

const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY

export default async function fetchTrending():Promise<TrendingResponse> {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending?vs_currency=inr",
  {
    headers: {
      "x-cg-demo-api-key": API_KEY,
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch trending data")
  }

  return res.json();
}