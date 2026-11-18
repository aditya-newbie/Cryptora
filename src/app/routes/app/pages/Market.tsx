import {
  Search,
  Flame,
  Rocket,
  TrendingDown,
  Sparkles,
  Filter,
} from "lucide-react";
import { formatMatricPrefix, formatNumber } from "../../../../utils/format";
import MiniChart from "../../../../components/MiniChart";
import { convertChartData, filter24hChange, filterCategory, filterMarketCap, filterTabPill, filterVolume24h } from "../../../../utils/mutate";
import { PrimarySelect, SecondarySelect } from "../../../../components/select";
import { useFilterStore } from "../../../../stores/dashboard-filter-store";
import React, { useMemo, useState } from "react";
import useMarket from "../../../../hooks/useMarket";

export default function Market() {

  const { market, trending, categories } = useMarket();

  const [ selectedTabPill, setSelectedTabPill ] = useState("all")

  const category = useFilterStore((state) => state.category);
  const setCategory = useFilterStore((state) => state.setCategory);
  const categoryFilters = useFilterStore((state) => state.categoryFilters);
  const marketCap = useFilterStore((state) => state.marketCap);
  const setMarketCap = useFilterStore((state) => state.setMarketCap);
  const marketCapFilters = useFilterStore((state) => state.marketCapFilters);
  const change24h = useFilterStore((state) => state.change24h);
  const setChange24h = useFilterStore((state) => state.setChange24h);
  const change24hFilters = useFilterStore((state) => state.change24hFilters);
  const volume24h = useFilterStore((state) => state.volume24h);
  const setVolume24h = useFilterStore((state) => state.setVolume24h);
  const volume24hFilters = useFilterStore((state) => state.volume24hFilters);

  const filteredMarket = useMemo(() => {
    const filterdTab = filterTabPill(selectedTabPill, market, trending)
    const filteredCategory = filterCategory(category, categories, filterdTab);
    const filteredMarketCap = filterMarketCap(marketCap, filteredCategory);
    const fileteredVolume24h = filterVolume24h(volume24h, filteredMarketCap);
    return filter24hChange(change24h, fileteredVolume24h);
  }, [selectedTabPill, trending, market, categories, category, marketCap, volume24h, change24h])

  function handleTabPillChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedTabPill(event.target.value)
  }


  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      <div className="mx-auto max-w-350 px-6 py-8">
        {/* ── Page Title ── */}
        <h1 className="text-3xl font-bold">Markets</h1>
        <p className="mt-1 text-sm text-gray-400">
          Explore and compare cryptocurrencies.
        </p>

        {/* ── Tab Pills ── */}
        <div className="mt-6 flex items-center gap-3">
          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "all"}
              value="all"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <span>All Assets</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "trending"}
              value="trending"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <Flame className="h-4 w-4 text-orange-400" />
            <span>Trending</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "gainers"}
              value="gainers"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <Rocket className="h-4 w-4 text-gain" />
            <span>Gainers</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "losers"}
              value="losers"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <TrendingDown className="h-4 w-4 text-loss" />
            <span>Losers</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "new-listings"}
              value="new-listings"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span>New Listings</span>
          </label>

          <SecondarySelect value={category} onChange={setCategory} values={categoryFilters} placeholder="Category" />
        </div>

        {/* ── Search + Filter Bar ── */}
        <div className="mt-6 flex items-center gap-3">
          {/* Search Input */}
          <div className="flex flex-1 items-center gap-3 rounded-lg border border-card bg-card px-4 py-2.5">
            <Search className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">Search assets (BTC, ETH, SOL...)</span>
            <span className="ml-auto rounded border border-card px-2 py-0.5 text-xs text-gray-500">Ctrl K</span>
          </div>

          {/* Market Cap Dropdown */}
          <PrimarySelect value={marketCap} onChange={setMarketCap} values={marketCapFilters} placeholder="MarketCap" />

          {/* Volume (24h) Dropdown */}
          <PrimarySelect value={volume24h} onChange={setVolume24h} values={volume24hFilters} placeholder="Volume (24h)" />

          {/* 24h Change Dropdown */}
          <PrimarySelect value={change24h} onChange={setChange24h} values={change24hFilters} placeholder="24h Change" />

          {/* Filter Button */}
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white cursor-pointer">
            <Filter className="h-4 w-4" />
          </button>
        </div>

        {/* ── Asset Table ── */}
        <div className="mt-6 overflow-x-auto rounded-xl border border-card bg-card">
          <table className="w-full min-w-225 text-sm">
            <thead>
              <tr className="border-b border-card text-left text-xs text-gray-500">
                <th className="px-5 py-4 font-medium">#</th>
                <th className="px-5 py-4 font-medium">Asset</th>
                <th className="px-5 py-4 font-medium">Price</th>
                <th className="px-5 py-4 font-medium">24h %</th>
                <th className="px-5 py-4 font-medium">7d %</th>
                <th className="px-5 py-4 font-medium">Market Cap</th>
                <th className="px-5 py-4 font-medium">Volume (24h)</th>
                <th className="px-5 py-4 font-medium">Circulating Supply</th>
                <th className="px-5 py-4 font-medium">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>

              {filteredMarket.map(coin => {
                return (
                  <tr key={coin.id} className="border-b border-card hover-card">
                    <td className="px-5 py-4 text-gray-400">{coin.market_cap_rank}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img className="flex h-8 w-8 items-center justify-center rounded-full" src={coin.image} />
                        <div>
                          <span className="font-medium">{coin.name}</span>
                          <span className="ml-2 text-xs text-gray-500">{coin.symbol}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-medium tabular-nums">₹{coin.current_price}</td>
                    <td className={
                      `px-5 py-4 tabular-nums
                      ${coin.price_change_percentage_24h >= 0 ? "text-gain" : "text-loss"}`
                    }>{formatNumber(coin.price_change_percentage_24h)}%</td>
                    <td className={
                      `px-5 py-4 tabular-nums
                      ${coin.price_change_percentage_7d_in_currency &&
                        coin.price_change_percentage_7d_in_currency >= 0 ? "text-gain" : "text-loss"}`
                    }>{coin.price_change_percentage_7d_in_currency?.toFixed(2)}%</td>
                    <td className="px-5 py-4 tabular-nums">₹{formatMatricPrefix(coin.market_cap)}</td>
                    <td className="px-5 py-4 tabular-nums">₹{formatMatricPrefix(coin.total_volume)}</td>
                    <td className="px-5 py-4 tabular-nums">{formatMatricPrefix(coin.circulating_supply)} {coin.symbol.toUpperCase()}</td>
                    <td className="px-5 py-4">
                      <div className="h-8 w-24 rounded bg-gray-800/50">
                        <MiniChart
                          data={convertChartData(coin.sparkline_in_7d?.price)}
                          gain={(coin?.price_change_percentage_7d_in_currency ?? 1) >= 0}
                        />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

