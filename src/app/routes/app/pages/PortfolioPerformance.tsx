import {
  TrendingUp,
  Clock,
  ArrowUp,
  ArrowDown,
  Wallet,
} from "lucide-react";

export default function PortfolioPerformance() {
  return (
    <div className="font-body flex flex-col gap-4">
      {/* ── Top Row: Performance Metrics + Chart ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Left: Performance Card (1 col) */}
        <div className="rounded-2xl border border-card bg-card p-6">
          <h2 className="text-lg font-bold text-white">Performance</h2>

          <div className="mt-5 flex flex-col gap-4">
            {/* Total Return */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-gain">
                  <Wallet className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-400">Total Return</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-gain">
                +64.20%
              </span>
            </div>

            {/* Total P&L */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gain/15 text-accent">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-400">Total P&L</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-gain">
                +$4,850.80
              </span>
            </div>

            {/* 24h Return */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-400">24h Return</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-gain">
                +0.91%
              </span>
            </div>

            {/* Best Day */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gain/15 text-gain">
                  <ArrowUp className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-400">Best Day</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-gain">
                +4.28%
              </span>
            </div>

            {/* Worst Day */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-loss/15 text-loss">
                  <ArrowDown className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-400">Worst Day</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-loss">
                -2.17%
              </span>
            </div>
          </div>
        </div>

        {/* Right: Portfolio Value + Chart (2 cols) */}
        <div className="rounded-2xl border border-card bg-card p-6 lg:col-span-2">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">Portfolio Value</p>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-3xl font-bold tabular-nums text-white">
                  $12,450.80
                </span>
                <span className="text-sm font-semibold tabular-nums text-gain">
                  +64.20%
                </span>
              </div>
            </div>

            {/* Timeframe selector */}
            <div className="flex items-center gap-1 rounded-xl border border-card bg-canvas/60 p-1 text-xs">
              <button className="rounded-lg px-2.5 py-1 text-gray-400 hover:text-white cursor-pointer">
                1D
              </button>
              <button className="rounded-lg px-2.5 py-1 text-gray-400 hover:text-white cursor-pointer">
                1W
              </button>
              <button className="rounded-lg bg-accent px-2.5 py-1 font-medium text-white shadow-sm cursor-pointer">
                1M
              </button>
              <button className="rounded-lg px-2.5 py-1 text-gray-400 hover:text-white cursor-pointer">
                3M
              </button>
              <button className="rounded-lg px-2.5 py-1 text-gray-400 hover:text-white cursor-pointer">
                1Y
              </button>
              <button className="rounded-lg px-2.5 py-1 text-gray-400 hover:text-white cursor-pointer">
                ALL
              </button>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="mt-6 flex h-60 items-center justify-center rounded-xl border border-dashed border-card bg-canvas/40">
            <span className="text-sm text-gray-500">Portfolio Value Chart Area</span>
          </div>
        </div>
      </div>

      {/* ── Bottom Row: Returns ── */}
      <div className="rounded-2xl border border-card bg-card p-6">
        <h2 className="text-lg font-bold text-white">Returns</h2>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {/* 1D */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-card bg-canvas/50 px-4 py-3 text-center">
            <span className="text-xs text-gray-400">1D</span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-gain">
              +0.91%
            </span>
          </div>

          {/* 1W */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-card bg-canvas/50 px-4 py-3 text-center">
            <span className="text-xs text-gray-400">1W</span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-gain">
              +3.76%
            </span>
          </div>

          {/* 1M (Active) */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-accent bg-accent/10 px-4 py-3 text-center shadow-[0_0_12px_rgba(139,92,246,0.2)]">
            <span className="text-xs font-medium text-gray-200">1M</span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-gain">
              +12.48%
            </span>
          </div>

          {/* 3M */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-card bg-canvas/50 px-4 py-3 text-center">
            <span className="text-xs text-gray-400">3M</span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-gain">
              +28.31%
            </span>
          </div>

          {/* 1Y */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-card bg-canvas/50 px-4 py-3 text-center">
            <span className="text-xs text-gray-400">1Y</span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-gain">
              +64.20%
            </span>
          </div>

          {/* ALL */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-card bg-canvas/50 px-4 py-3 text-center">
            <span className="text-xs text-gray-400">ALL</span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-gain">
              +64.20%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

