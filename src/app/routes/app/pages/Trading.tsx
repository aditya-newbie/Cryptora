import {
  ChevronDown,
  Star,
  Settings,
  Maximize2,
  TrendingUp,
  Pencil,
  RotateCcw,
  Info,
  MoreHorizontal,
} from "lucide-react";

export default function Trading() {
  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      {/* ── Top Ticker Bar ── */}
      <div className="border-b border-card bg-card">
        <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-3">
          {/* Left: Pair selector + Price */}
          <div className="flex items-center gap-6">
            {/* Pair Selector */}
            <button className="flex items-center gap-2 rounded-full border border-card bg-canvas px-4 py-2 cursor-pointer">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold">₿</span>
              <span className="text-sm font-medium">BTC / USD</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            <button className="text-gray-500 hover:text-yellow-400 cursor-pointer">
              <Star className="h-5 w-5" />
            </button>

            {/* Price + Change */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tabular-nums">$67,432.50</span>
              <span className="text-sm text-gain tabular-nums">+1,612.40 (+2.45%)</span>
            </div>
          </div>

          {/* Center: Stats */}
          <div className="flex items-center gap-8">
            <div>
              <p className="text-[10px] text-gray-500">24h High</p>
              <p className="text-sm font-medium tabular-nums">$68,750.07</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500">24h Low</p>
              <p className="text-sm font-medium tabular-nums">$65,781.20</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500">24h Volume</p>
              <p className="text-sm font-medium tabular-nums">$28.42B</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500">Market Cap</p>
              <p className="text-sm font-medium tabular-nums">$1.33T</p>
            </div>
          </div>

          {/* Right: Paper Trading Button */}
          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white cursor-pointer">
            Paper Trading
          </button>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-350 px-6 py-4">
        <div className="grid grid-cols-3 gap-4">
          {/* ════════════════════════════════════════
              LEFT COLUMN (2/3) - Chart + Orders
              ════════════════════════════════════════ */}
          <div className="col-span-2 flex flex-col gap-4">
            {/* ── Chart Card ── */}
            <div className="rounded-xl border border-card bg-card p-4">
              {/* Chart Toolbar */}
              <div className="flex items-center justify-between">
                {/* Left: Chart / Indicators / Drawing */}
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white cursor-pointer">
                    Chart
                  </button>
                  <button className="flex items-center gap-1.5 rounded-lg border border-card px-3 py-1.5 text-xs text-gray-400 hover:text-white cursor-pointer">
                    <Settings className="h-3 w-3" />
                    Indicators
                  </button>
                  <button className="flex items-center gap-1.5 rounded-lg border border-card px-3 py-1.5 text-xs text-gray-400 hover:text-white cursor-pointer">
                    <Pencil className="h-3 w-3" />
                    Drawing
                  </button>
                </div>

                {/* Right: Timeframes + chart type + fullscreen */}
                <div className="flex items-center gap-3">
                  {/* Time periods */}
                  <div className="flex items-center gap-0.5 rounded-lg border border-card p-0.5">
                    <button className="rounded px-2.5 py-1 text-xs text-gray-500 hover:text-white cursor-pointer">1m</button>
                    <button className="rounded px-2.5 py-1 text-xs text-gray-500 hover:text-white cursor-pointer">5m</button>
                    <button className="rounded px-2.5 py-1 text-xs text-gray-500 hover:text-white cursor-pointer">15m</button>
                    <button className="rounded bg-accent px-2.5 py-1 text-xs font-medium text-white cursor-pointer">1H</button>
                    <button className="rounded px-2.5 py-1 text-xs text-gray-500 hover:text-white cursor-pointer">4H</button>
                    <button className="rounded px-2.5 py-1 text-xs text-gray-500 hover:text-white cursor-pointer">1D</button>
                    <button className="rounded px-2.5 py-1 text-xs text-gray-500 hover:text-white cursor-pointer">1W</button>
                  </div>

                  {/* Chart type icons */}
                  <div className="flex items-center gap-1">
                    <button className="flex h-7 w-7 items-center justify-center rounded text-accent cursor-pointer">
                      <TrendingUp className="h-4 w-4" />
                    </button>
                    <button className="flex h-7 w-7 items-center justify-center rounded text-gray-500 hover:text-white cursor-pointer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="8" width="4" height="12" rx="1" />
                        <rect x="10" y="4" width="4" height="16" rx="1" />
                        <rect x="17" y="6" width="4" height="14" rx="1" />
                      </svg>
                    </button>
                  </div>

                  <button className="flex h-7 w-7 items-center justify-center rounded text-gray-500 hover:text-white cursor-pointer">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* OHLC Info Bar */}
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                <span className="font-medium text-gray-300">BTC / USD · 1H</span>
                <span>O:<span className="tabular-nums text-gray-300">66,981.20</span></span>
                <span>H:<span className="tabular-nums text-gray-300">67,512.80</span></span>
                <span>L:<span className="tabular-nums text-gray-300">66,928.40</span></span>
                <span>C:<span className="tabular-nums text-gray-300">67,432.50</span></span>
                <span className="text-gain tabular-nums">+451.30 (+0.67%)</span>
              </div>

              {/* Main Chart Placeholder */}
              <div className="mt-3 flex h-64 items-center justify-center rounded-lg bg-gray-800/30">
                <span className="text-sm text-gray-600">Candlestick Chart Area</span>
              </div>

              {/* RSI Indicator Placeholder */}
              <div className="mt-2 rounded-lg bg-gray-800/30 px-3 py-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-medium text-gray-400">RSI (14)</span>
                  <span className="tabular-nums text-accent">56.24</span>
                </div>
                <div className="mt-1 h-14"></div>
              </div>

              {/* MACD Indicator Placeholder */}
              <div className="mt-2 rounded-lg bg-gray-800/30 px-3 py-2">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium text-gray-400">MACD (12, 26, 9)</span>
                  <span className="tabular-nums text-blue-400">134.21</span>
                  <span className="tabular-nums text-gain">221.37</span>
                  <span className="tabular-nums text-loss">87.16</span>
                </div>
                <div className="mt-1 h-14"></div>
              </div>
            </div>

            {/* ── Open Orders / Trade History / Positions ── */}
            <div className="rounded-xl border border-card bg-card p-4">
              {/* Tabs */}
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-accent px-4 py-1.5 text-xs font-medium text-white cursor-pointer">
                  Open Orders (1)
                </button>
                <button className="rounded-lg border border-card px-4 py-1.5 text-xs text-gray-400 hover:text-white cursor-pointer">
                  Trade History
                </button>
                <button className="rounded-lg border border-card px-4 py-1.5 text-xs text-gray-400 hover:text-white cursor-pointer">
                  Positions
                </button>
              </div>

              {/* Orders Table */}
              <table className="mt-4 w-full text-xs">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-3 font-medium">#</th>
                    <th className="pb-3 font-medium">Asset</th>
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Price</th>
                    <th className="pb-3 font-medium">Total</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Created At</th>
                    <th className="pb-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-card">
                    <td className="py-3 text-gray-400">1</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[9px] font-bold">₿</span>
                        <span className="font-medium">BTC</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy (Limit)</span>
                    </td>
                    <td className="py-3 tabular-nums">0.0100 BTC</td>
                    <td className="py-3 tabular-nums">$66,500.00</td>
                    <td className="py-3 tabular-nums">$665.00</td>
                    <td className="py-3">
                      <span className="rounded bg-accent/20 px-2 py-0.5 text-accent">Open</span>
                    </td>
                    <td className="py-3 tabular-nums text-gray-400">Oct 28, 21:32</td>
                    <td className="py-3">
                      <button className="text-gray-500 hover:text-white cursor-pointer">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ════════════════════════════════════════
              RIGHT COLUMN (1/3) - Order Form + Trades
              ════════════════════════════════════════ */}
          <div className="flex flex-col gap-4">
            {/* ── Paper Trading Account Card ── */}
            <div className="rounded-xl border border-card bg-card p-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold">Paper Trading Account</h2>
                  <Info className="h-3.5 w-3.5 text-gray-500" />
                </div>
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-white cursor-pointer">
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </button>
              </div>

              {/* Account Value */}
              <div className="mt-3">
                <p className="text-[10px] text-gray-500">Account Value</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold tabular-nums">$10,428.75</span>
                  <span className="text-sm text-gain tabular-nums">+4.29%</span>
                </div>
              </div>

              {/* Available Cash / Invested */}
              <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                <div>
                  <span>Available Cash</span>
                  <p className="mt-0.5 font-medium text-white tabular-nums">$7,530.20</p>
                </div>
                <div className="text-right">
                  <span>Invested</span>
                  <p className="mt-0.5 font-medium text-white tabular-nums">$2,898.55</p>
                </div>
              </div>

              {/* Buy / Sell Toggle */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="rounded-lg bg-gain py-2.5 text-sm font-medium text-white cursor-pointer">
                  Buy
                </button>
                <button className="rounded-lg border border-loss py-2.5 text-sm font-medium text-loss cursor-pointer">
                  Sell
                </button>
              </div>

              {/* Order Type */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">Order Type</span>
                <button className="flex items-center gap-1.5 rounded border border-card px-3 py-1.5 text-xs text-white cursor-pointer">
                  Market
                  <ChevronDown className="h-3 w-3 text-gray-500" />
                </button>
              </div>

              {/* Amount */}
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Amount (USD)</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="flex-1 rounded border border-card bg-canvas px-3 py-2 text-sm tabular-nums text-white">
                    1000
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="rounded border border-card px-2 py-1.5 text-[10px] text-gray-400 hover:text-white cursor-pointer">25%</button>
                    <button className="rounded border border-card px-2 py-1.5 text-[10px] text-gray-400 hover:text-white cursor-pointer">50%</button>
                    <button className="rounded border border-card px-2 py-1.5 text-[10px] text-gray-400 hover:text-white cursor-pointer">75%</button>
                    <button className="rounded border border-card px-2 py-1.5 text-[10px] text-gray-400 hover:text-white cursor-pointer">100%</button>
                  </div>
                </div>
              </div>

              {/* Est. Quantity */}
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-gray-400">Est. Quantity</span>
                <span className="tabular-nums text-gray-300">≈ 0.01483 BTC</span>
              </div>

              {/* Place Order Button */}
              <button className="mt-4 w-full rounded-lg bg-gain py-3 text-sm font-medium text-white cursor-pointer">
                Place Buy Order (Paper)
              </button>
            </div>

            {/* ── Recent Trades Card ── */}
            <div className="rounded-xl border border-card bg-card p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold">Recent Trades</h2>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-gain"></span>
                  From GeckoTerminal
                  <Info className="h-3 w-3" />
                </div>
              </div>

              <table className="mt-3 w-full text-xs">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-2 font-medium">Time</th>
                    <th className="pb-2 font-medium">Price (USD)</th>
                    <th className="pb-2 font-medium">Amount (BTC)</th>
                    <th className="pb-2 text-right font-medium">Side</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-card">
                    <td className="py-2 tabular-nums">21:34:12</td>
                    <td className="py-2 tabular-nums">$67,432.50</td>
                    <td className="py-2 tabular-nums">0.1250</td>
                    <td className="py-2 text-right">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2 tabular-nums">21:33:58</td>
                    <td className="py-2 tabular-nums">$67,429.00</td>
                    <td className="py-2 tabular-nums">0.2100</td>
                    <td className="py-2 text-right">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2 tabular-nums">21:33:46</td>
                    <td className="py-2 tabular-nums">$67,415.20</td>
                    <td className="py-2 tabular-nums">0.0750</td>
                    <td className="py-2 text-right">
                      <span className="rounded bg-loss/20 px-2 py-0.5 text-loss">Sell</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2 tabular-nums">21:33:40</td>
                    <td className="py-2 tabular-nums">$67,413.70</td>
                    <td className="py-2 tabular-nums">0.3200</td>
                    <td className="py-2 text-right">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2 tabular-nums">21:33:21</td>
                    <td className="py-2 tabular-nums">$67,398.10</td>
                    <td className="py-2 tabular-nums">0.0500</td>
                    <td className="py-2 text-right">
                      <span className="rounded bg-loss/20 px-2 py-0.5 text-loss">Sell</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

