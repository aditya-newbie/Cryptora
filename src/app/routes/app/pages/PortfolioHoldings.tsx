import {
  Layers,
  Wallet,
  TrendingUp,
  Clock,
  Search,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

export default function PortfolioHoldings() {
  return (
    <div className="font-body flex flex-col gap-4">
      {/* ── Top Stat Cards ── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Holdings */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Total Holdings</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-white">8</p>
          </div>
        </div>

        {/* Total Value */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Wallet className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Total Value</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-white">
              $12,450.80
            </p>
          </div>
        </div>

        {/* Total P&L */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gain/15 text-gain">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-400">Total P&L</p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="text-2xl font-bold tabular-nums text-gain">
                +$450.80
              </span>
              <span className="rounded-full bg-gain/15 px-2 py-0.5 text-xs font-semibold tabular-nums text-gain">
                +3.76%
              </span>
            </div>
          </div>
        </div>

        {/* 24h P&L */}
        <div className="flex items-center gap-4 rounded-2xl border border-card bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
            <Clock className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-400">24h P&L</p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="text-2xl font-bold tabular-nums text-gain">
                +$112.40
              </span>
              <span className="rounded-full bg-gain/15 px-2 py-0.5 text-xs font-semibold tabular-nums text-gain">
                +0.91%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Holdings Table Card ── */}
      <div className="rounded-2xl border border-card bg-card p-6">
        {/* Table Header Controls */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-white">Holdings</h2>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="flex items-center gap-2 rounded-xl border border-card bg-canvas/60 px-3.5 py-1.5 text-xs text-gray-400">
              <Search className="h-3.5 w-3.5 text-gray-500" />
              <span>Search holdings...</span>
            </div>

            {/* Sort Dropdown */}
            <button className="flex items-center gap-2 rounded-xl border border-card bg-canvas/60 px-3.5 py-1.5 text-xs text-gray-300 hover:text-white cursor-pointer">
              <span>Value (High to Low)</span>
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
                <th className="pb-3.5 font-medium">Asset</th>
                <th className="pb-3.5 font-medium">Quantity</th>
                <th className="pb-3.5 font-medium">Avg. Price</th>
                <th className="pb-3.5 font-medium">Current Price</th>
                <th className="pb-3.5 font-medium">Value</th>
                <th className="pb-3.5 font-medium">P&L</th>
                <th className="pb-3.5 font-medium">P&L %</th>
                <th className="pb-3.5 font-medium">Allocation</th>
                <th className="pb-3.5 text-right font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card/60">
              {/* Row 1: BTC */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">1</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">0.1250</td>
                <td className="py-3 tabular-nums text-gray-400">$68,000.00</td>
                <td className="py-3 tabular-nums text-gray-300">$73,420.00</td>
                <td className="py-3 font-medium tabular-nums text-white">$9,177.50</td>
                <td className="py-3 font-medium tabular-nums text-gain">+$677.50</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-gain/15 px-2 py-0.5 text-gain">+7.97%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">42.3%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 2: ETH */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">2</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">1.2500</td>
                <td className="py-3 tabular-nums text-gray-400">$3,210.00</td>
                <td className="py-3 tabular-nums text-gray-300">$3,402.00</td>
                <td className="py-3 font-medium tabular-nums text-white">$4,252.50</td>
                <td className="py-3 font-medium tabular-nums text-gain">+$240.00</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-gain/15 px-2 py-0.5 text-gain">+5.98%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">26.1%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 3: SOL */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">3</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">8.0000</td>
                <td className="py-3 tabular-nums text-gray-400">$138.00</td>
                <td className="py-3 tabular-nums text-gray-300">$127.50</td>
                <td className="py-3 font-medium tabular-nums text-white">$1,020.00</td>
                <td className="py-3 font-medium tabular-nums text-loss">-$84.00</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-loss/15 px-2 py-0.5 text-loss">-7.60%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">12.8%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 4: BNB */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">4</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">6.0000</td>
                <td className="py-3 tabular-nums text-gray-400">$145.00</td>
                <td className="py-3 tabular-nums text-gray-300">$153.55</td>
                <td className="py-3 font-medium tabular-nums text-white">$921.30</td>
                <td className="py-3 font-medium tabular-nums text-gain">+$51.30</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-gain/15 px-2 py-0.5 text-gain">+5.89%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">7.4%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 5: ADA */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">5</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">1,000.0000</td>
                <td className="py-3 tabular-nums text-gray-400">$0.42</td>
                <td className="py-3 tabular-nums text-gray-300">$0.44</td>
                <td className="py-3 font-medium tabular-nums text-white">$440.00</td>
                <td className="py-3 font-medium tabular-nums text-gain">+$20.00</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-gain/15 px-2 py-0.5 text-gain">+4.76%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">3.5%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 6: DOT */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">6</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">50.0000</td>
                <td className="py-3 tabular-nums text-gray-400">$6.20</td>
                <td className="py-3 tabular-nums text-gray-300">$6.10</td>
                <td className="py-3 font-medium tabular-nums text-white">$305.00</td>
                <td className="py-3 font-medium tabular-nums text-loss">-$5.00</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-loss/15 px-2 py-0.5 text-loss">-1.61%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">2.4%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 7: AVAX */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">7</td>
                <td className="py-3">
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
                <td className="py-3 tabular-nums text-gray-300">10.0000</td>
                <td className="py-3 tabular-nums text-gray-400">$32.00</td>
                <td className="py-3 tabular-nums text-gray-300">$31.40</td>
                <td className="py-3 font-medium tabular-nums text-white">$314.00</td>
                <td className="py-3 font-medium tabular-nums text-loss">-$6.00</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-loss/15 px-2 py-0.5 text-loss">-1.88%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">2.5%</td>
                <td className="py-3 text-right">
                  <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>

              {/* Row 8: Others */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">8</td>
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-slate-300">
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-medium text-white">Others</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-gray-500">—</td>
                <td className="py-3 text-gray-500">—</td>
                <td className="py-3 text-gray-500">—</td>
                <td className="py-3 font-medium tabular-nums text-white">$1,414.70</td>
                <td className="py-3 font-medium tabular-nums text-gain">+$7.00</td>
                <td className="py-3 font-medium tabular-nums">
                  <span className="rounded bg-gain/15 px-2 py-0.5 text-gain">+0.50%</span>
                </td>
                <td className="py-3 tabular-nums text-gray-300">11.4%</td>
                <td className="py-3 text-right">
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

