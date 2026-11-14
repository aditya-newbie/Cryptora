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

export default function Market() {
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
                <td className="px-5 py-4 font-medium tabular-nums">₹67,432.50</td>
                <td className="px-5 py-4 text-gain tabular-nums">+1.20%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+3.86%</td>
                <td className="px-5 py-4 tabular-nums">₹1.33T</td>
                <td className="px-5 py-4 tabular-nums">₹28.42B</td>
                <td className="px-5 py-4 tabular-nums">19.72M BTC</td>
                <td className="px-5 py-4">
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
                <td className="px-5 py-4 font-medium tabular-nums">₹3,245.10</td>
                <td className="px-5 py-4 text-loss tabular-nums">-0.50%</td>
                <td className="px-5 py-4 text-loss tabular-nums">-2.14%</td>
                <td className="px-5 py-4 tabular-nums">₹390.2B</td>
                <td className="px-5 py-4 tabular-nums">₹15.67B</td>
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
                <td className="px-5 py-4 font-medium tabular-nums">₹602.00</td>
                <td className="px-5 py-4 text-gain tabular-nums">+0.90%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+4.21%</td>
                <td className="px-5 py-4 tabular-nums">₹92.78B</td>
                <td className="px-5 py-4 tabular-nums">₹2.14B</td>
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
                <td className="px-5 py-4 font-medium tabular-nums">₹153.00</td>
                <td className="px-5 py-4 text-gain tabular-nums">+2.40%</td>
                <td className="px-5 py-4 text-loss tabular-nums">-1.33%</td>
                <td className="px-5 py-4 tabular-nums">₹70.47B</td>
                <td className="px-5 py-4 tabular-nums">₹4.98B</td>
                <td className="px-5 py-4 tabular-nums">459.31M SOL</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 5 - XRP */}
              <tr className="border-b border-card hover-card">
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
                <td className="px-5 py-4 font-medium tabular-nums">₹0.52</td>
                <td className="px-5 py-4 text-gain tabular-nums">+3.01%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+2.17%</td>
                <td className="px-5 py-4 tabular-nums">₹29.12B</td>
                <td className="px-5 py-4 tabular-nums">₹2.53B</td>
                <td className="px-5 py-4 tabular-nums">55.96B XRP</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 6 - Dogecoin */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">6</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-xs font-bold">D</span>
                    <div>
                      <span className="font-medium">Dogecoin</span>
                      <span className="ml-2 text-xs text-gray-500">DOGE</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">₹0.16</td>
                <td className="px-5 py-4 text-gain tabular-nums">+3.00%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+6.74%</td>
                <td className="px-5 py-4 tabular-nums">₹23.41B</td>
                <td className="px-5 py-4 tabular-nums">₹1.21B</td>
                <td className="px-5 py-4 tabular-nums">144.72B DOGE</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 7 - Cardano */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">7</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-bold">A</span>
                    <div>
                      <span className="font-medium">Cardano</span>
                      <span className="ml-2 text-xs text-gray-500">ADA</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">₹0.42</td>
                <td className="px-5 py-4 text-loss tabular-nums">-1.12%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+0.86%</td>
                <td className="px-5 py-4 tabular-nums">₹15.02B</td>
                <td className="px-5 py-4 tabular-nums">₹478.36M</td>
                <td className="px-5 py-4 tabular-nums">35.68B ADA</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 8 - Avalanche */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">8</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold">A</span>
                    <div>
                      <span className="font-medium">Avalanche</span>
                      <span className="ml-2 text-xs text-gray-500">AVAX</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">₹34.21</td>
                <td className="px-5 py-4 text-gain tabular-nums">+4.35%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+9.20%</td>
                <td className="px-5 py-4 tabular-nums">₹13.45B</td>
                <td className="px-5 py-4 tabular-nums">₹713.90M</td>
                <td className="px-5 py-4 tabular-nums">392.22M AVAX</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 9 - Chainlink */}
              <tr className="border-b border-card hover-card">
                <td className="px-5 py-4 text-gray-400">9</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">⬡</span>
                    <div>
                      <span className="font-medium">Chainlink</span>
                      <span className="ml-2 text-xs text-gray-500">LINK</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">₹16.82</td>
                <td className="px-5 py-4 text-gain tabular-nums">+2.18%</td>
                <td className="px-5 py-4 text-gain tabular-nums">+5.61%</td>
                <td className="px-5 py-4 tabular-nums">₹10.68B</td>
                <td className="px-5 py-4 tabular-nums">₹524.31M</td>
                <td className="px-5 py-4 tabular-nums">633.10M LINK</td>
                <td className="px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50"></div>
                </td>
              </tr>

              {/* Row 10 - Polygon */}
              <tr className="hover-card">
                <td className="px-5 py-4 text-gray-400">10</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-xs font-bold">P</span>
                    <div>
                      <span className="font-medium">Polygon</span>
                      <span className="ml-2 text-xs text-gray-500">MATIC</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium tabular-nums">₹0.78</td>
                <td className="px-5 py-4 text-loss tabular-nums">-0.63%</td>
                <td className="px-5 py-4 text-loss tabular-nums">-1.97%</td>
                <td className="px-5 py-4 tabular-nums">₹7.73B</td>
                <td className="px-5 py-4 tabular-nums">₹280.41M</td>
                <td className="px-5 py-4 tabular-nums">9.87B MATIC</td>
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

