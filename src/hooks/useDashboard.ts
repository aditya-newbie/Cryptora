import { useQuery } from "@tanstack/react-query";
import type MarketCoin from "../types/MarketCoin";
import type { TrendingResponse } from "../types/TrendingCoin";
import type GlobalMarketResponse from "../types/GlobalMarket";
import fetchMarket from "../services/coingecko/market";
import fetchTrending from "../services/coingecko/trending";
import fetchGlobal from "../services/coingecko/global";

interface DashboardApi {
  market: MarketCoin[] | undefined,
  trending: TrendingResponse | undefined,
  global: GlobalMarketResponse | undefined,
  isLoading: boolean,
  error: Error | null,
  isError: boolean,
  isPending: boolean,
}

export default function useDashboard(): DashboardApi {

  const marketQuery = useQuery({
      queryKey: ["market"],
      queryFn: fetchMarket
    })
    const trendingQuery = useQuery({
      queryKey: ["trending"],
      queryFn: fetchTrending
    })
    const globalQuery = useQuery({
      queryKey: ["global"],
      queryFn: fetchGlobal
    })

    let error = null;

    if (marketQuery.isError) {
      error = marketQuery.error
    } 
    if (trendingQuery.isError) {
      error = trendingQuery.error
    } 
    if (globalQuery.isError) {
      error = globalQuery.error
    }

    return {
      market: marketQuery.data,
      trending: trendingQuery.data,
      global: globalQuery.data,
      isLoading: marketQuery.isLoading || trendingQuery.isLoading || globalQuery.isLoading,
      error,
      isError :  marketQuery.isError || trendingQuery.isError || globalQuery.isError,
      isPending :  marketQuery.isPending || trendingQuery.isPending || globalQuery.isPending,
    }
  
}