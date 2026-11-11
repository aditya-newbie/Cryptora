import {
  Info,
  Layers,
  Code,
  Coins,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

export default function PortfolioAssetAllocation() {
  return (
    <div className="font-body flex flex-col gap-4">
      {/* ── Top Row: Assets Allocation + Allocation by Category ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left: Assets Allocation */}
        <div className="rounded-2xl border border-card bg-card p-6">
          <h2 className="text-lg font-bold text-white">Assets Allocation</h2>

          <div className="mt-6 flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Donut Chart Placeholder with Center Text */}
            <div className="relative flex h-48 w-48 shrink-0 items-center justify-center rounded-full border-8 border-card bg-canvas/40">
              <div className="flex flex-col items-center text-center">
                <span className="text-xl font-bold tabular-nums text-white">
                  $12,450.80
                </span>
                <span className="text-xs text-gray-400">Total Value</span>
              </div>
            </div>

            {/* Allocation breakdown list */}
            <div className="flex w-full flex-col gap-3.5 text-xs sm:w-auto sm:min-w-60">
              {/* BTC */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="font-medium text-white">BTC</span>
                </div>
                <span className="tabular-nums text-gray-400">42.3%</span>
                <span className="font-medium tabular-nums text-white">
                  $5,270.70
                </span>
              </div>

              {/* ETH */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span className="font-medium text-white">ETH</span>
                </div>
                <span className="tabular-nums text-gray-400">26.1%</span>
                <span className="font-medium tabular-nums text-white">
                  $3,251.40
                </span>
              </div>

              {/* SOL */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gain" />
                  <span className="font-medium text-white">SOL</span>
                </div>
                <span className="tabular-nums text-gray-400">12.8%</span>
                <span className="font-medium tabular-nums text-white">
                  $1,592.70
                </span>
              </div>

              {/* BNB */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-loss" />
                  <span className="font-medium text-white">BNB</span>
                </div>
                <span className="tabular-nums text-gray-400">7.4%</span>
                <span className="font-medium tabular-nums text-white">
                  $921.30
                </span>
              </div>

              {/* Others */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                  <span className="font-medium text-white">Others</span>
                </div>
                <span className="tabular-nums text-gray-400">11.4%</span>
                <span className="font-medium tabular-nums text-white">
                  $1,414.70
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Allocation by Category */}
        <div className="rounded-2xl border border-card bg-card p-6">
          <h2 className="text-lg font-bold text-white">Allocation by Category</h2>

          <div className="mt-6 flex flex-col gap-5">
            {/* Layer 1 */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Layers className="h-4 w-4" />
              </div>
              <span className="w-28 shrink-0 font-medium text-gray-200">
                Layer 1
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas/60">
                <div className="h-full rounded-full bg-accent" style={{ width: "52.6%" }} />
              </div>
              <span className="w-12 text-right font-medium tabular-nums text-white">
                52.6%
              </span>
            </div>

            {/* Smart Contract */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <Code className="h-4 w-4" />
              </div>
              <span className="w-28 shrink-0 font-medium text-gray-200">
                Smart Contract
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas/60">
                <div className="h-full rounded-full bg-blue-500" style={{ width: "26.1%" }} />
              </div>
              <span className="w-12 text-right font-medium tabular-nums text-white">
                26.1%
              </span>
            </div>

            {/* Exchange Token */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-loss/15 text-loss">
                <Coins className="h-4 w-4" />
              </div>
              <span className="w-28 shrink-0 font-medium text-gray-200">
                Exchange Token
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas/60">
                <div className="h-full rounded-full bg-loss" style={{ width: "7.4%" }} />
              </div>
              <span className="w-12 text-right font-medium tabular-nums text-white">
                7.4%
              </span>
            </div>

            {/* Others */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-500/15 text-slate-400">
                <MoreHorizontal className="h-4 w-4" />
              </div>
              <span className="w-28 shrink-0 font-medium text-gray-200">
                Others
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas/60">
                <div className="h-full rounded-full bg-slate-400" style={{ width: "13.9%" }} />
              </div>
              <span className="w-12 text-right font-medium tabular-nums text-white">
                13.9%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Row: Asset Allocation Changes + Top Assets by Allocation ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left: Asset Allocation Changes */}
        <div className="rounded-2xl border border-card bg-card p-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">Asset Allocation Changes</h2>
            <Info className="h-4 w-4 text-gray-500" />
          </div>

          <table className="mt-5 w-full text-xs">
            <thead>
              <tr className="border-b border-card text-left text-gray-500">
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Current</th>
                <th className="pb-3 font-medium">Previous (7D)</th>
                <th className="pb-3 text-right font-medium">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card/60">
              {/* BTC */}
              <tr className="hover-card">
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold">
                      ₿
                    </span>
                    <span className="font-medium text-white">BTC</span>
                  </div>
                </td>
                <td className="py-3 tabular-nums text-gray-300">42.3%</td>
                <td className="py-3 tabular-nums text-gray-400">40.8%</td>
                <td className="py-3 text-right font-medium tabular-nums text-gain">
                  +1.5 pp
                </td>
              </tr>

              {/* ETH */}
              <tr className="hover-card">
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold">
                      Ξ
                    </span>
                    <span className="font-medium text-white">ETH</span>
                  </div>
                </td>
                <td className="py-3 tabular-nums text-gray-300">26.1%</td>
                <td className="py-3 tabular-nums text-gray-400">27.4%</td>
                <td className="py-3 text-right font-medium tabular-nums text-loss">
                  -1.3 pp
                </td>
              </tr>

              {/* SOL */}
              <tr className="hover-card">
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gain text-[10px] font-bold">
                      S
                    </span>
                    <span className="font-medium text-white">SOL</span>
                  </div>
                </td>
                <td className="py-3 tabular-nums text-gray-300">12.8%</td>
                <td className="py-3 tabular-nums text-gray-400">11.9%</td>
                <td className="py-3 text-right font-medium tabular-nums text-gain">
                  +0.9 pp
                </td>
              </tr>

              {/* BNB */}
              <tr className="hover-card">
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold">
                      B
                    </span>
                    <span className="font-medium text-white">BNB</span>
                  </div>
                </td>
                <td className="py-3 tabular-nums text-gray-300">7.4%</td>
                <td className="py-3 tabular-nums text-gray-400">8.1%</td>
                <td className="py-3 text-right font-medium tabular-nums text-loss">
                  -0.7 pp
                </td>
              </tr>

              {/* Others */}
              <tr className="hover-card">
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-slate-300">
                      <MoreHorizontal className="h-3 w-3" />
                    </span>
                    <span className="font-medium text-white">Others</span>
                  </div>
                </td>
                <td className="py-3 tabular-nums text-gray-300">11.4%</td>
                <td className="py-3 tabular-nums text-gray-400">11.8%</td>
                <td className="py-3 text-right font-medium tabular-nums text-loss">
                  -0.4 pp
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right: Top Assets by Allocation */}
        <div className="rounded-2xl border border-card bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Top Assets by Allocation</h2>
            <button className="flex items-center gap-1 text-xs font-medium text-accent hover:underline cursor-pointer">
              <span>View All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <table className="mt-5 w-full text-xs">
            <thead>
              <tr className="border-b border-card text-left text-gray-500">
                <th className="pb-3 font-medium">#</th>
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Value</th>
                <th className="pb-3 text-right font-medium">Allocation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card/60">
              {/* Row 1 - BTC */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">1</td>
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold">
                      ₿
                    </span>
                    <div>
                      <p className="font-medium text-white">BTC</p>
                      <p className="text-[10px] text-gray-500">Bitcoin</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 font-medium tabular-nums text-white">
                  $5,270.70
                </td>
                <td className="py-3 text-right tabular-nums text-gray-300">
                  42.3%
                </td>
              </tr>

              {/* Row 2 - ETH */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">2</td>
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold">
                      Ξ
                    </span>
                    <div>
                      <p className="font-medium text-white">ETH</p>
                      <p className="text-[10px] text-gray-500">Ethereum</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 font-medium tabular-nums text-white">
                  $3,251.40
                </td>
                <td className="py-3 text-right tabular-nums text-gray-300">
                  26.1%
                </td>
              </tr>

              {/* Row 3 - SOL */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">3</td>
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gain text-[10px] font-bold">
                      S
                    </span>
                    <div>
                      <p className="font-medium text-white">SOL</p>
                      <p className="text-[10px] text-gray-500">Solana</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 font-medium tabular-nums text-white">
                  $1,592.70
                </td>
                <td className="py-3 text-right tabular-nums text-gray-300">
                  12.8%
                </td>
              </tr>

              {/* Row 4 - BNB */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">4</td>
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold">
                      B
                    </span>
                    <div>
                      <p className="font-medium text-white">BNB</p>
                      <p className="text-[10px] text-gray-500">BNB</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 font-medium tabular-nums text-white">
                  $921.30
                </td>
                <td className="py-3 text-right tabular-nums text-gray-300">
                  7.4%
                </td>
              </tr>

              {/* Row 5 - Others */}
              <tr className="hover-card">
                <td className="py-3 text-gray-500">5</td>
                <td className="py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-slate-300">
                      <MoreHorizontal className="h-3 w-3" />
                    </span>
                    <div>
                      <p className="font-medium text-white">Others</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 font-medium tabular-nums text-white">
                  $1,414.70
                </td>
                <td className="py-3 text-right tabular-nums text-gray-300">
                  11.4%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

