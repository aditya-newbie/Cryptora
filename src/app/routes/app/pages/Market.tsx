import { useQuery } from "@tanstack/react-query";
import {
  Search,
  Flame,
  Rocket,
  TrendingDown,
  Sparkles,
  ChevronDown,
  Filter,
  Layers,
} from "lucide-react";
import fetchMarket from "../../../../services/coingecko/market";
import { formatMatricPrefix, formatNumber } from "../../../../utils/format";
import MiniChart from "../../../../components/MiniChart";
import { convertChartData } from "../../../../utils/mutate";

export default function Market() {

  const marketQuery = useQuery({
    queryKey: ["market"],
    queryFn: fetchMarket
  })

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
          <button className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white cursor-pointer">
            All Assets
          </button>
          <button className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <Flame className="h-4 w-4 text-orange-400" />
            Trending
          </button>
          <button className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <Rocket className="h-4 w-4 text-gain" />
            Gainers
          </button>
          <button className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <TrendingDown className="h-4 w-4 text-loss" />
            Losers
          </button>
          <button className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            New Listings
          </button>
          <button className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <Layers className="h-4 w-4 text-blue-400" />
            Categories
            <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
          </button>
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
          <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2.5 text-sm text-gray-300 hover:text-white cursor-pointer">
            Market Cap
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {/* Volume (24h) Dropdown */}
          <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2.5 text-sm text-gray-300 hover:text-white cursor-pointer">
            Volume (24h)
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {/* 24h Change Dropdown */}
          <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2.5 text-sm text-gray-300 hover:text-white cursor-pointer">
            24h Change
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {/* Network Dropdown */}
          <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2.5 text-sm text-gray-300 hover:text-white cursor-pointer">
            Network
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

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

              {(marketQuery?.data ?? []).map(coin => {
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
                    }>+{formatNumber(coin.price_change_percentage_24h)}%</td>
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

