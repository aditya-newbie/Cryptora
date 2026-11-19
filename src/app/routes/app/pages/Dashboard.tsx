import {
  Info,
  Filter,
  DollarSign,
  BarChart3,
  Gauge,
  Bitcoin,
} from "lucide-react";

import { formatNumber, formatMatricPrefix, capitalise } from "../../../../utils/format";
import { getMarketBreadth } from "../../../../utils/calc";
import useDashboard from "../../../../hooks/useDashboard";
import { useShallow } from "zustand/react/shallow";
import { useFilterStore } from "../../../../stores/dashboard-filter-store";
import { PrimarySelect } from "../../../../components/select";
import {
  filter24hChange,
  filterCategory,
  filterMarketCap,
} from "../../../../utils/mutate";
import { useMemo } from "react";
import AssetTable from "../../../../components/AssetTable";

export default function Dashboard() {

  const { market, trending, global, categories, error, isPending } = useDashboard();

  const { category, categoryFilters, setCategory, marketCap, marketCapFilters, setMarketCap, change24h, change24hFilters, setChange24h } = useFilterStore(useShallow((state) => ({
    category: state.category,
    categoryFilters: state.categoryFilters,
    setCategory: state.setCategory,
    marketCap: state.marketCap,
    marketCapFilters: state.marketCapFilters,
    setMarketCap: state.setMarketCap,
    change24h: state.change24h,
    change24hFilters: state.change24hFilters,
    setChange24h: state.setChange24h,
  })))

  const filteredMarket = useMemo(() => {
    const filteredCategory = filterCategory(category, categories, market);
    const filteredByMarketCap = filterMarketCap(marketCap, filteredCategory);
    return filter24hChange(change24h, filteredByMarketCap);
  }, [category, categories, market, marketCap, change24h])


  if (isPending) {
    return <div className="p-6 text-gray-300">Loading market data...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-loss">
        Could not load market data: {error.message}
      </div>
    );
  }

  const marketBreadth = getMarketBreadth(market);
  const marketCapChangePercentage = global?.data?.market_cap_change_percentage_24h_usd;
  const fearGreedIndex = global?.data?.fear_and_greed_index;

  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      {/* ── Ticker Tape ── */}
      <div className="w-full overflow-x-auto scrollbar-hide border-b border-card bg-canvas">
        <div className="flex items-center gap-8 px-6 py-2.5 whitespace-nowrap min-w-max">

          {trending?.coins.map(coin => {
            return (
              <div key={coin.item.id} className="flex items-center gap-2">
                <img
                  className="flex h-5 w-5 items-center justify-center"
                  src={coin.item.thumb}
                  alt={coin.item.name}
                />
                <span className="text-sm text-gray-300">{coin.item.name}</span>
                <span className="text-sm font-medium tabular-nums">₹{formatNumber(coin.item.data.price)}</span>
                <span className={`text-sm 
                  ${coin.item.data.price_change_percentage_24h.inr >= 0
                    ? "text-gain"
                    : "text-loss"
                  } 
                  tabular-nums`}>{formatNumber(coin.item.data.price_change_percentage_24h.inr)}%</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-350 px-6 py-8">
        {/* ── Overview Header + Stats Cards ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Title + Market Breadth */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">Overview</h1>
              <p className="mt-1 text-sm text-gray-400">
                Your portfolio, market overview and top assets.
              </p>
            </div>

            {/* Market Breadth Card */}
            <div className="rounded-xl border border-card bg-card px-5 py-4 w-fit">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span>Market Breadth</span>
                <Info className="h-3.5 w-3.5 text-gray-500" />
                <span className="ml-4 text-gray-400">
                  <span className="text-gain text-xs">{marketBreadth.advancing}%</span>
                  <span className="mx-1">·</span>
                  <span className="text-loss text-xs">{marketBreadth.declining}%</span>
                </span>
              </div>
              <div className="mt-2.5 flex h-2 w-64 overflow-hidden rounded-full">
                <div className="bg-gain" style={{ width: `${marketBreadth.advancing}%` }}></div>
                <div className="bg-loss" style={{ width: `${marketBreadth.declining}%` }}></div>
              </div>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="flex-1 grid grid-cols-2 gap-4 xl:grid-cols-4">
            {/* Total Market Cap */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <DollarSign className="h-4 w-4 text-accent" />
                <span>Total Market Cap</span>
              </div>
              <p className="mt-3 text-3xl font-bold tabular-nums">₹{formatMatricPrefix(global?.data?.total_market_cap?.inr)}</p>
              <p className={
                `mt-1 text-sm tabular-nums 
                ${(marketCapChangePercentage ?? 1) >= 0 ? "text-gain" : "text-loss"}`
              }>{formatNumber(marketCapChangePercentage)}%</p>
            </div>

            {/* 24h Volume */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <BarChart3 className="h-4 w-4 text-accent" />
                <span>24h Volume</span>
              </div>
              <p className="mt-3 text-3xl font-bold tabular-nums">₹{formatMatricPrefix(global?.data?.total_volume?.inr)}</p>
              <p className="mt-1 text-sm text-gain tabular-nums">{formatNumber(global?.data?.volume_change_percentage_24h_usd)}%</p>
            </div>

            {/* Market Sentiment */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Gauge className="h-4 w-4 text-accent" />
                <span>Market Sentiment</span>
              </div>
              <div className="mt-3 flex flex-col items-center">
                <span className="text-3xl font-bold tabular-nums">{fearGreedIndex?.value}</span>
                <span className={
                  `mt-1 text-sm 
                  ${(fearGreedIndex?.sentiment === "fear") || (fearGreedIndex?.sentiment === "extreme_fear") ? "text-loss" : "text-gain"}`
                }>{capitalise(fearGreedIndex?.sentiment)}</span>
              </div>
            </div>

            {/* BTC Dominance */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Bitcoin className="h-4 w-4 text-accent" />
                <span>BTC Dominance</span>
              </div>
              <p className="mt-4 text-3xl font-bold tabular-nums">{(global?.data?.market_cap_percentage.btc)?.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className="mt-8 flex items-center justify-between">
          {/* Left: Filters */}
          <div className="flex items-center gap-3">
            {/* Filter icon button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-card bg-card text-gray-400 hover:text-white cursor-pointer">
              <Filter className="h-4 w-4" />
            </button>

            {/* Category Dropdown */}
            <PrimarySelect value={category} onChange={setCategory} values={categoryFilters} placeholder="Category" />

            {/* Market Cap Dropdown */}
            <PrimarySelect value={marketCap} onChange={setMarketCap} values={marketCapFilters} placeholder="MarketCap" />

            {/* 24h Change Dropdown */}
            <PrimarySelect value={change24h} onChange={setChange24h} values={change24hFilters} placeholder="24h Change" />
          </div>


        </div>

        {/* ── Asset Table ── */}
        <AssetTable marketData={filteredMarket.slice(0, 10)} />
      </div>
    </div>
  );
}
