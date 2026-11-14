import type GlobalMarketResponse from "../../types/GlobalMarket";

const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY

export default async function fetchGlobal(): Promise<GlobalMarketResponse> {
  console.log("fetching global")
  const res = await fetch("https://api.coingecko.com/api/v3/global?vs_currency=inr",
  {
    headers: {
      "x-cg-demo-api-key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch global data")
  }


  return res.json();
}

