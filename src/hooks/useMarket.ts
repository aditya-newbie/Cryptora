import { useQuery } from "@tanstack/react-query"
import fetchMarket, { fetchCategory } from "../services/coingecko/market"
import fetchTrending from "../services/coingecko/trending"


export default function useMarket() {

  const trendingQuery = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrending
  })
  const marketQuery = useQuery({
    queryKey: ["market"],
    queryFn: fetchMarket
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
  if (categoryQuery.isError) {
    error = categoryQuery.error
  }

  return {
    market: marketQuery.data,
    trending: trendingQuery.data,
    categories: categoryQuery.data,
    isLoading: marketQuery.isLoading || trendingQuery.isLoading || categoryQuery.isLoading,
    error,
    isError: marketQuery.isError || trendingQuery.isError || categoryQuery.isError,
    isPending: marketQuery.isPending || trendingQuery.isPending || categoryQuery.isPending,
  }
}