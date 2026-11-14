import {
  ChevronRight,
  Star,
  Share2,
  TrendingUp,
  TrendingDown,
  Info,
  Globe,
  FileText,
  Link2,
  Calendar,
  Tag,
  ExternalLink,
  CircleDot,
  Coins,
  Wallet,
} from "lucide-react";

export default function AssetDetails() {
  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      <div className="mx-auto max-w-350 px-6 py-6">
        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer">Markets</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">Bitcoin (BTC)</span>
        </div>

        {/* ── Asset Header Card ── */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-card bg-card px-6 py-5">
          {/* Left: Logo + Name + Price */}
          <div className="flex items-center gap-6">
            {/* Logo + Name */}
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold">₿</span>
              <div>
                <h1 className="text-xl font-bold">Bitcoin</h1>
                <p className="text-sm text-gray-400">BTC · Rank #1</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="rounded bg-gray-700 px-2 py-0.5 text-xs text-gray-300">Layer 1</span>
                  <span className="rounded bg-gray-700 px-2 py-0.5 text-xs text-gray-300">Store of Value</span>
                </div>
              </div>
            </div>

            {/* Price + Change */}
            <div className="ml-6 border-l border-card pl-6">
              <p className="text-3xl font-bold tabular-nums">₹67,432.50</p>
              <p className="mt-1 text-sm text-gain tabular-nums">
                +1,612.40 (+2.45%) <span className="text-gray-500">24h</span>
              </p>
            </div>
          </div>

          {/* Center: Time Period Tabs */}
          <div className="flex items-center gap-1 rounded-lg border border-card p-1">
            <div className="flex flex-col items-center px-3 py-1.5">
              <span className="text-xs text-gray-500">1H</span>
              <span className="text-xs text-gain tabular-nums">+0.28%</span>
            </div>
            <div className="flex flex-col items-center rounded-md bg-accent/20 px-3 py-1.5">
              <span className="text-xs text-white">24H</span>
              <span className="text-xs text-gain tabular-nums">+2.45%</span>
            </div>
            <div className="flex flex-col items-center px-3 py-1.5">
              <span className="text-xs text-gray-500">7D</span>
              <span className="text-xs text-gain tabular-nums">+3.86%</span>
            </div>
            <div className="flex flex-col items-center px-3 py-1.5">
              <span className="text-xs text-gray-500">30D</span>
              <span className="text-xs text-gain tabular-nums">+8.72%</span>
            </div>
            <div className="flex flex-col items-center px-3 py-1.5">
              <span className="text-xs text-gray-500">1Y</span>
              <span className="text-xs text-gain tabular-nums">+62.31%</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-card text-gray-400 hover:text-white cursor-pointer">
              <Star className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-card text-gray-400 hover:text-white cursor-pointer">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Chart + Market Statistics ── */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {/* Left: Chart Card (2/3 width) */}
          <div className="col-span-2 rounded-xl border border-card bg-card p-5">
            {/* Chart Header */}
            <div className="flex items-center justify-between">
              {/* Left: Toggle */}
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-accent px-4 py-1.5 text-sm font-medium text-white cursor-pointer">Price</button>
                <button className="rounded-lg border border-card px-4 py-1.5 text-sm text-gray-400 hover:text-white cursor-pointer">Market Cap</button>
              </div>

              {/* Right: Chart type + Time periods */}
              <div className="flex items-center gap-4">
                {/* Chart type icons */}
                <div className="flex items-center gap-1 rounded-lg border border-card p-1">
                  <button className="flex h-8 w-8 items-center justify-center rounded bg-accent/20 text-accent cursor-pointer">
                    <TrendingUp className="h-4 w-4" />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-white cursor-pointer">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="8" width="4" height="12" rx="1" />
                      <rect x="10" y="4" width="4" height="16" rx="1" />
                      <rect x="17" y="6" width="4" height="14" rx="1" />
                    </svg>
                  </button>
                </div>

                {/* Time periods */}
                <div className="flex items-center gap-1 rounded-lg border border-card p-1">
                  <button className="rounded px-3 py-1.5 text-xs text-gray-500 hover:text-white cursor-pointer">1H</button>
                  <button className="rounded bg-accent px-3 py-1.5 text-xs font-medium text-white cursor-pointer">24H</button>
                  <button className="rounded px-3 py-1.5 text-xs text-gray-500 hover:text-white cursor-pointer">7D</button>
                  <button className="rounded px-3 py-1.5 text-xs text-gray-500 hover:text-white cursor-pointer">1M</button>
                  <button className="rounded px-3 py-1.5 text-xs text-gray-500 hover:text-white cursor-pointer">3M</button>
                  <button className="rounded px-3 py-1.5 text-xs text-gray-500 hover:text-white cursor-pointer">1Y</button>
                  <button className="rounded px-3 py-1.5 text-xs text-gray-500 hover:text-white cursor-pointer">ALL</button>
                </div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="mt-4 flex h-80 items-center justify-center rounded-lg bg-gray-800/30">
              <span className="text-sm text-gray-600">Chart Area</span>
            </div>
          </div>

          {/* Right: Market Statistics Card (1/3 width) */}
          <div className="rounded-xl border border-card bg-card p-5">
            <h2 className="text-lg font-bold">Market Statistics</h2>

            <div className="mt-4 flex flex-col gap-4">
              {/* Market Cap */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleDot className="h-4 w-4" />
                  <span>Market Cap</span>
                  <Info className="h-3 w-3 text-gray-600" />
                </div>
                <span className="text-sm font-medium tabular-nums">₹1.33T</span>
              </div>

              {/* Fully Diluted Valuation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Coins className="h-4 w-4" />
                  <span>Fully Diluted Valuation</span>
                </div>
                <span className="text-sm font-medium tabular-nums">₹1.41T</span>
              </div>

              {/* 24h Volume */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Wallet className="h-4 w-4" />
                  <span>24h Volume</span>
                </div>
                <span className="text-sm font-medium tabular-nums">₹28.42B</span>
              </div>

              <div className="border-t border-card"></div>

              {/* Circulating Supply */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleDot className="h-4 w-4" />
                  <span>Circulating Supply</span>
                </div>
                <span className="text-sm font-medium tabular-nums">19.72M BTC</span>
              </div>

              {/* Total Supply */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleDot className="h-4 w-4" />
                  <span>Total Supply</span>
                </div>
                <span className="text-sm font-medium tabular-nums">19.72M BTC</span>
              </div>

              {/* Max Supply */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Coins className="h-4 w-4" />
                  <span>Max Supply</span>
                </div>
                <span className="text-sm font-medium tabular-nums">21.00M BTC</span>
              </div>

              <div className="border-t border-card"></div>

              {/* All-Time High */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>All-Time High</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium tabular-nums">₹73,750.07</span>
                  <span className="ml-2 text-xs text-loss tabular-nums">(-8.57%)</span>
                </div>
              </div>

              {/* All-Time Low */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingDown className="h-4 w-4" />
                  <span>All-Time Low</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium tabular-nums">₹67.81</span>
                  <span className="ml-2 text-xs text-gain tabular-nums">(+99,397%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Market Activity ── */}
        <div className="mt-4 rounded-xl border border-card bg-card p-5">
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold">Market Activity</h2>
            <span className="text-xs text-gray-500">On-chain DEX activity · Source: GeckoTerminal</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {/* Left: Buy vs Sell Volume */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>Buy vs Sell Volume</span>
                  <Info className="h-3.5 w-3.5 text-gray-500" />
                </div>
                <button className="flex items-center gap-1 rounded border border-card px-3 py-1 text-xs text-gray-400 cursor-pointer">
                  24H
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M3 5l3 3 3-3H3z" /></svg>
                </button>
              </div>

              {/* Chart Placeholder */}
              <div className="mt-3 flex h-52 items-center justify-center rounded-lg bg-gray-800/30">
                <span className="text-sm text-gray-600">Chart Area</span>
              </div>

              {/* Legend */}
              <div className="mt-3 flex items-center gap-6 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gain"></span>
                  <span className="text-gray-400">Buy Volume</span>
                  <span className="font-medium tabular-nums">₹42.58M</span>
                  <span className="text-gain tabular-nums">(57.7%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-loss"></span>
                  <span className="text-gray-400">Sell Volume</span>
                  <span className="font-medium tabular-nums">₹31.21M</span>
                  <span className="text-loss tabular-nums">(42.3%)</span>
                </div>
              </div>
            </div>

            {/* Right: Recent Trades */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Recent Trades</h3>
                <button className="text-gray-500 hover:text-white cursor-pointer">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <table className="mt-3 w-full text-xs">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-2 font-medium">Time</th>
                    <th className="pb-2 font-medium">Price</th>
                    <th className="pb-2 font-medium">Amount</th>
                    <th className="pb-2 font-medium">Value (USD)</th>
                    <th className="pb-2 text-right font-medium">Side</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-card">
                    <td className="py-2.5 tabular-nums">21:34:12</td>
                    <td className="py-2.5 tabular-nums">₹67,432.50</td>
                    <td className="py-2.5 tabular-nums">0.1250 BTC</td>
                    <td className="py-2.5 tabular-nums">₹8,429.06</td>
                    <td className="py-2.5 text-right">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2.5 tabular-nums">21:34:07</td>
                    <td className="py-2.5 tabular-nums">₹67,428.10</td>
                    <td className="py-2.5 tabular-nums">0.0500 BTC</td>
                    <td className="py-2.5 tabular-nums">₹3,371.41</td>
                    <td className="py-2.5 text-right">
                      <span className="rounded bg-loss/20 px-2 py-0.5 text-loss">Sell</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2.5 tabular-nums">21:33:58</td>
                    <td className="py-2.5 tabular-nums">₹67,429.00</td>
                    <td className="py-2.5 tabular-nums">0.2100 BTC</td>
                    <td className="py-2.5 tabular-nums">₹14,160.09</td>
                    <td className="py-2.5 text-right">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2.5 tabular-nums">21:33:46</td>
                    <td className="py-2.5 tabular-nums">₹67,415.20</td>
                    <td className="py-2.5 tabular-nums">0.0750 BTC</td>
                    <td className="py-2.5 tabular-nums">₹5,056.14</td>
                    <td className="py-2.5 text-right">
                      <span className="rounded bg-loss/20 px-2 py-0.5 text-loss">Sell</span>
                    </td>
                  </tr>
                  <tr className="border-t border-card">
                    <td className="py-2.5 tabular-nums">21:33:40</td>
                    <td className="py-2.5 tabular-nums">₹67,413.70</td>
                    <td className="py-2.5 tabular-nums">0.3200 BTC</td>
                    <td className="py-2.5 tabular-nums">₹21,572.38</td>
                    <td className="py-2.5 text-right">
                      <span className="rounded bg-gain/20 px-2 py-0.5 text-gain">Buy</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── About Bitcoin ── */}
        <div className="mt-4 rounded-xl border border-card bg-card p-5">
          <h2 className="text-lg font-bold">About Bitcoin</h2>

          <div className="mt-4 grid grid-cols-3 gap-6">
            {/* Left: Description */}
            <div>
              <p className="text-sm leading-relaxed text-gray-400">
                Bitcoin is a decentralized digital currency that operates without a
                central authority. It enables peer-to-peer transactions, is secured
                by a proof-of-work network and has a fixed supply of 21 million
                coins.
              </p>
              <button className="mt-3 flex items-center gap-1 text-sm text-accent hover:underline cursor-pointer">
                Read more
                <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="currentColor"><path d="M3 5l3 3 3-3H3z" /></svg>
              </button>
            </div>

            {/* Middle: Info */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-3 text-sm">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="w-28 text-gray-400">Website</span>
                <a className="text-accent hover:underline" href="#">https://bitcoin.org</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="w-28 text-gray-400">Whitepaper</span>
                <a className="text-accent hover:underline" href="#">Bitcoin Whitepaper</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Link2 className="h-4 w-4 text-gray-500" />
                <span className="w-28 text-gray-400">Blockchain</span>
                <span className="text-gray-300">Bitcoin</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="w-28 text-gray-400">Genesis Date</span>
                <span className="text-gray-300 tabular-nums">Jan 3, 2009</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="w-28 text-gray-400">Categories</span>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent/15 px-2.5 py-0.5 text-xs text-accent">Layer 1</span>
                  <span className="rounded bg-accent/15 px-2.5 py-0.5 text-xs text-accent">Store of Value</span>
                  <span className="rounded bg-accent/15 px-2.5 py-0.5 text-xs text-accent">Payments</span>
                </div>
              </div>
            </div>

            {/* Right: Community */}
            <div>
              <h3 className="text-sm font-medium">Community</h3>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-bold text-gray-400">𝕏</span>
                  <span className="w-20 text-gray-400">X</span>
                  <a className="text-accent hover:underline" href="#">@Bitcoin</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="h-4 w-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                  <span className="w-20 text-gray-400">Reddit</span>
                  <a className="text-accent hover:underline" href="#">r/Bitcoin</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
                  <span className="w-20 text-gray-400">GitHub</span>
                  <a className="text-accent hover:underline" href="#">bitcoin/bitcoin</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.88 7.98-3.44 3.8-1.6 4.59-1.88 5.1-1.89.11 0 .37.03.54.17.14.12.18.28.2.46-.01.06.01.24 0 .38z" /></svg>
                  <span className="w-20 text-gray-400">Telegram</span>
                  <a className="text-accent hover:underline" href="#">Bitcoin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

