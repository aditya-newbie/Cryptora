import { useQuery } from "@tanstack/react-query";
import type MarketCoin from "../types/MarketCoin";
import type { TrendingResponse } from "../types/TrendingCoin";
import type GlobalMarketResponse from "../types/GlobalMarket";
import type { CategoryMarkets } from "../types/Dashboard";
import { fetchMarket, fetchTrending, fetchGlobal, fetchCategory } from "../services/coingecko";

interface DashboardApi {
  market: MarketCoin[] | undefined,
  trending: TrendingResponse | undefined,
  global: GlobalMarketResponse | undefined,
  categories: CategoryMarkets | undefined,
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
  const categoryQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategory,
    staleTime: 1000 * 60 * 60 * 24 * 14,
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
  if (categoryQuery.isError) {
    error = categoryQuery.error
  }

  return {
    market: marketQuery.data,
    trending: trendingQuery.data,
    global: globalQuery.data,
    categories: categoryQuery.data,
    isLoading: marketQuery.isLoading || trendingQuery.isLoading || globalQuery.isLoading || categoryQuery.isLoading,
    error,
    isError: marketQuery.isError || trendingQuery.isError || globalQuery.isError || categoryQuery.isError,
    isPending: marketQuery.isPending || trendingQuery.isPending || globalQuery.isPending || categoryQuery.isPending,
  }

}