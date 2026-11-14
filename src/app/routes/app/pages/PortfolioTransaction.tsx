import {
  ArrowLeftRight,
  ArrowDown,
  ArrowUp,
  Search,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

export default function PortfolioTransaction() {
  return (
    <div className="font-body flex flex-col gap-4">
      {/* ── Top Stat Cards ── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Transactions */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <ArrowLeftRight className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Total Transactions</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-white">32</p>
          </div>
        </div>

        {/* Buys */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gain/15 text-gain">
            <ArrowDown className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Buys</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-white">18</p>
          </div>
        </div>

        {/* Sells */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-loss/15 text-loss">
            <ArrowUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Sells</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-white">14</p>
          </div>
        </div>

        {/* Net Flow */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <ArrowLeftRight className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Net Flow</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-gain">
              +₹1,240.50
            </p>
          </div>
        </div>
      </div>

      {/* ── Recent Transactions Table Card ── */}
      <div className="rounded-2xl border border-card bg-card p-6">
        {/* Header Controls */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-white">Recent Transactions</h2>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="flex items-center gap-2 rounded-xl border border-card bg-canvas/60 px-3.5 py-1.5 text-xs text-gray-400">
              <Search className="h-3.5 w-3.5 text-gray-500" />
              <span>Search transactions...</span>
            </div>

            {/* Filter Dropdown */}
            <button className="flex items-center gap-2 rounded-xl border border-card bg-canvas/60 px-3.5 py-1.5 text-xs text-gray-300 hover:text-white cursor-pointer">
              <span>All Transactions</span>
              <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-225 text-xs">
            <thead>
              <tr className="border-b border-card text-left text-gray-500">
                <th className="pb-3.5 font-medium">#</th>
                <th className="pb-3.5 font-medium">Date &amp; Time</th>
                <th className="pb-3.5 font-medium">Type</th>
                <th className="pb-3.5 font-medium">Asset</th>
                <th className="pb-3.5 font-medium">Quantity</th>
                <th className="pb-3.5 font-medium">Price</th>
                <th className="pb-3.5 font-medium">Total</th>
                <th className="pb-3.5 font-medium">P&amp;L</th>
                <th className="pb-3.5 text-right font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card/60">
              {/* Row 1: BTC Buy */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">1</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 28, 2026 10:24 AM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-gain/15 px-2.5 py-1 text-[11px] font-semibold text-gain">
                    Buy
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold">
                      ₿
                    </span>
                    <div>
                      <p className="font-medium text-white">BTC</p>
                      <p className="text-[10px] text-gray-500">Bitcoin</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">0.0200</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹73,420.00</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹1,468.40
                </td>
                <td className="py-3.5 text-gray-500">—</td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 2: SOL Sell */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">2</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 27, 2026 07:18 PM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-loss/15 px-2.5 py-1 text-[11px] font-semibold text-loss">
                    Sell
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gain text-[11px] font-bold">
                      S
                    </span>
                    <div>
                      <p className="font-medium text-white">SOL</p>
                      <p className="text-[10px] text-gray-500">Solana</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">4.0000</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹128.00</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹512.00
                </td>
                <td className="py-3.5 font-medium tabular-nums text-gain">
                  +₹36.00 (+7.56%)
                </td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 3: ETH Buy */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">3</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 26, 2026 02:43 PM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-gain/15 px-2.5 py-1 text-[11px] font-semibold text-gain">
                    Buy
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold">
                      Ξ
                    </span>
                    <div>
                      <p className="font-medium text-white">ETH</p>
                      <p className="text-[10px] text-gray-500">Ethereum</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">0.5000</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹3,360.00</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹1,680.00
                </td>
                <td className="py-3.5 text-gray-500">—</td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 4: DOT Sell */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">4</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 24, 2026 11:09 AM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-loss/15 px-2.5 py-1 text-[11px] font-semibold text-loss">
                    Sell
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-[11px] font-bold">
                      ●
                    </span>
                    <div>
                      <p className="font-medium text-white">DOT</p>
                      <p className="text-[10px] text-gray-500">Polkadot</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">20.0000</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹6.15</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹123.00
                </td>
                <td className="py-3.5 font-medium tabular-nums text-loss">
                  -₹4.00 (-3.15%)
                </td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 5: BNB Buy */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">5</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 22, 2026 06:27 PM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-gain/15 px-2.5 py-1 text-[11px] font-semibold text-gain">
                    Buy
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 text-[11px] font-bold">
                      B
                    </span>
                    <div>
                      <p className="font-medium text-white">BNB</p>
                      <p className="text-[10px] text-gray-500">BNB</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">1.5000</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹150.00</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹225.00
                </td>
                <td className="py-3.5 text-gray-500">—</td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 6: ADA Buy */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">6</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 20, 2026 04:13 PM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-gain/15 px-2.5 py-1 text-[11px] font-semibold text-gain">
                    Buy
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold">
                      A
                    </span>
                    <div>
                      <p className="font-medium text-white">ADA</p>
                      <p className="text-[10px] text-gray-500">Cardano</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">500.0000</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹0.43</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹215.00
                </td>
                <td className="py-3.5 text-gray-500">—</td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 7: AVAX Sell */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">7</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 18, 2026 09:56 AM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-loss/15 px-2.5 py-1 text-[11px] font-semibold text-loss">
                    Sell
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold">
                      ▲
                    </span>
                    <div>
                      <p className="font-medium text-white">AVAX</p>
                      <p className="text-[10px] text-gray-500">Avalanche</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">5.0000</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹31.80</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹159.00
                </td>
                <td className="py-3.5 font-medium tabular-nums text-gain">
                  +₹12.00 (+8.16%)
                </td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 8: ETH Sell */}
              <tr className="hover-card">
                <td className="py-3.5 text-gray-500">8</td>
                <td className="py-3.5 tabular-nums text-gray-300">
                  Oct 16, 2026 03:20 PM
                </td>
                <td className="py-3.5">
                  <span className="rounded bg-loss/15 px-2.5 py-1 text-[11px] font-semibold text-loss">
                    Sell
                  </span>
                </td>
                <td className="py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold">
                      Ξ
                    </span>
                    <div>
                      <p className="font-medium text-white">ETH</p>
                      <p className="text-[10px] text-gray-500">Ethereum</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 tabular-nums text-gray-300">0.2500</td>
                <td className="py-3.5 tabular-nums text-gray-300">₹3,280.00</td>
                <td className="py-3.5 font-medium tabular-nums text-white">
                  ₹820.00
                </td>
                <td className="py-3.5 font-medium tabular-nums text-gain">
                  +₹50.00 (+6.49%)
                </td>
                <td className="py-3.5 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

