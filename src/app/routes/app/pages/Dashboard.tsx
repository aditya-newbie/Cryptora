import { useQuery } from "@tanstack/react-query";

import {
  Info,
  Filter,
  ChevronDown,
  List,
  LayoutGrid,
  DollarSign,
  BarChart3,
  Gauge,
  Bitcoin,
} from "lucide-react";

import fetchMarket from "../../../../services/coingecko/market";
import fetchTrending from "../../../../services/coingecko/trending";

export default function Dashboard() {

  const marketQuery = useQuery({
    queryKey: ["market"],
    queryFn: fetchMarket
  })

  const trendingQuery = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrending
  })

  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      {/* ── Ticker Tape ── */}
      <div className="w-full overflow-x-auto scrollbar-hide border-b border-card bg-canvas">
        <div className="flex items-center gap-8 px-6 py-2.5 whitespace-nowrap min-w-max">
          {/* BTC */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold">₿</span>
            <span className="text-sm text-gray-300">BTC</span>
            <span className="text-sm font-medium tabular-nums">$67,432</span>
            <span className="text-sm text-gain tabular-nums">+1.2%</span>
          </div>

          {/* ETH */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold">Ξ</span>
            <span className="text-sm text-gray-300">ETH</span>
            <span className="text-sm font-medium tabular-nums">$3,245</span>
            <span className="text-sm text-loss tabular-nums">-0.5%</span>
          </div>

          {/* BNB */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold">B</span>
            <span className="text-sm text-gray-300">BNB</span>
            <span className="text-sm font-medium tabular-nums">$602</span>
            <span className="text-sm text-gain tabular-nums">+0.9%</span>
          </div>

          {/* SOL */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-[10px] font-bold">S</span>
            <span className="text-sm text-gray-300">SOL</span>
            <span className="text-sm font-medium tabular-nums">$153</span>
            <span className="text-sm text-gain tabular-nums">+2.4%</span>
          </div>

          {/* XRP */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-[10px] font-bold">✕</span>
            <span className="text-sm text-gray-300">XRP</span>
            <span className="text-sm font-medium tabular-nums">$0.52</span>
            <span className="text-sm text-loss tabular-nums">-1.1%</span>
          </div>

          {/* DOGE */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold">D</span>
            <span className="text-sm text-gray-300">DOGE</span>
            <span className="text-sm font-medium tabular-nums">$0.16</span>
            <span className="text-sm text-gain tabular-nums">+3.0%</span>
          </div>

          {/* ADA */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[10px] font-bold">A</span>
            <span className="text-sm text-gray-300">ADA</span>
            <span className="text-sm font-medium tabular-nums">$0.38</span>
            <span className="text-sm text-gain tabular-nums">+1.8%</span>
          </div>

          {/* AVAX */}
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">A</span>
            <span className="text-sm text-gray-300">AVAX</span>
            <span className="text-sm font-medium tabular-nums">$34.12</span>
            <span className="text-sm text-loss tabular-nums">-0.7%</span>
          </div>
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
                  <span className="text-gain text-xs">68% Up</span>
                  <span className="mx-1">·</span>
                  <span className="text-loss text-xs">32% Down</span>
                </span>
              </div>
              <div className="mt-2.5 flex h-2 w-64 overflow-hidden rounded-full">
                <div className="bg-gain" style={{ width: "68%" }}></div>
                <div className="bg-loss" style={{ width: "32%" }}></div>
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
              <p className="mt-3 text-3xl font-bold tabular-nums">$2.43T</p>
              <p className="mt-1 text-sm text-gain tabular-nums">+1.21%</p>
            </div>

            {/* 24h Volume */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <BarChart3 className="h-4 w-4 text-accent" />
                <span>24h Volume</span>
              </div>
              <p className="mt-3 text-3xl font-bold tabular-nums">$112.4B</p>
              <p className="mt-1 text-sm text-gain tabular-nums">+8.32%</p>
            </div>

            {/* Market Sentiment */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Gauge className="h-4 w-4 text-accent" />
                <span>Market Sentiment</span>
              </div>
              <div className="mt-3 flex flex-col items-center">
                <span className="text-3xl font-bold tabular-nums">72</span>
                <span className="mt-1 text-sm text-gain">Greed</span>
              </div>
            </div>

            {/* BTC Dominance */}
            <div className="rounded-xl border border-card bg-card px-6 py-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Bitcoin className="h-4 w-4 text-accent" />
                <span>BTC Dominance</span>
              </div>
              <p className="mt-3 text-3xl font-bold tabular-nums">52.3%</p>
              <p className="mt-1 text-sm text-loss tabular-nums">−0.42%</p>
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
            <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer">
              Category
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* Market Cap Dropdown */}
            <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer">
              Market Cap
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* 24h Change Dropdown */}
            <button className="flex items-center gap-2 rounded-lg border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer">
              24h Change
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Right: View Toggle */}
          <div className="flex items-center overflow-hidden rounded-lg border border-card">
            <button className="flex h-9 w-9 items-center justify-center bg-accent text-white cursor-pointer">
              <List className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center bg-card text-gray-400 hover:text-white cursor-pointer">
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Asset Table ── */}
        <div className="mt-6 overflow-x-auto rounded-xl border border-card bg-card">
          <table className="w-full min-w-225 text-sm">
            <thead>
              <tr className="border-b border-card text-left text-xs text-gray-100">
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
              {/* Row 1 - Bitcoin */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">1</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold">₿</span>
                    <div>
                      <span className="font-medium">Bitcoin</span>
                      <span className="ml-2 text-xs text-gray-500">BTC</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">$67,432</td>
                <td className="px-5 py-4 text-gain tabular-nums">+1.20%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+3.86%</td>
                <td className="px-5 py-4 tabular-nums">$1.33T</td>
                <td className="px-5 py-4 tabular-nums">$28.42B</td>
                <td className="px-5 py-4 tabular-nums">19.72M BTC</td>
                <td className="px-5 py-4">
                  {/* Chart placeholder */}
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 2 - Ethereum */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">2</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold">Ξ</span>
                    <div>
                      <span className="font-medium">Ethereum</span>
                      <span className="ml-2 text-xs text-gray-500">ETH</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">$3,245</td>
                <td className="px-5 py-4 text-loss tabular-nums">-0.50%</td>
                <td className="px-5 py-4 text-loss tabular-nums">-2.14%</td>
                <td className="px-5 py-4 tabular-nums">$390.2B</td>
                <td className="px-5 py-4 tabular-nums">$15.67B</td>
                <td className="px-5 py-4 tabular-nums">120.19M ETH</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 3 - BNB */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">3</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold">B</span>
                    <div>
                      <span className="font-medium">BNB</span>
                      <span className="ml-2 text-xs text-gray-500">BNB</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">$602</td>
                <td className="px-5 py-4 text-gain tabular-nums">+0.90%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+4.21%</td>
                <td className="px-5 py-4 tabular-nums">$92.78B</td>
                <td className="px-5 py-4 tabular-nums">$2.14B</td>
                <td className="px-5 py-4 tabular-nums">153.86M BNB</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 4 - Solana */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">4</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-xs font-bold">S</span>
                    <div>
                      <span className="font-medium">Solana</span>
                      <span className="ml-2 text-xs text-gray-500">SOL</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">$153</td>
                <td className="px-5 py-4 text-gain tabular-nums">+2.40%</td>
                <td className="px-5 py-4 text-loss tabular-nums">-1.33%</td>
                <td className="px-5 py-4 tabular-nums">$70.47B</td>
                <td className="px-5 py-4 tabular-nums">$4.98B</td>
                <td className="px-5 py-4 tabular-nums">459.31M SOL</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 5 - XRP */}
              <tr className="hover-card">
                <td className="px-5 py-4 text-gray-400">5</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-xs font-bold">✕</span>
                    <div>
                      <span className="font-medium">XRP</span>
                      <span className="ml-2 text-xs text-gray-500">XRP</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">$0.52</td>
                <td className="px-5 py-4 text-gain tabular-nums">+3.01%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+2.17%</td>
                <td className="px-5 py-4 tabular-nums">$29.12B</td>
                <td className="px-5 py-4 tabular-nums">$2.53B</td>
                <td className="px-5 py-4 tabular-nums">55.96M XRP</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
