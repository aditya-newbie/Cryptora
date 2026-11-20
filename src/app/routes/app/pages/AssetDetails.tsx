import {
  ChevronRight,
  CircleDot,
  Coins,
  Globe,
  Info,
  Link2,
  Share2,
  Star,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function AssetDetails() {
  return (
    <main className="font-body min-h-screen bg-canvas px-6 pb-8 text-white">
      <div className="mx-auto max-w-350">
        <div className="flex h-11 items-center gap-2 text-xs text-gray-400">
          <span>Markets</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gray-200">Bitcoin (BTC)</span>
        </div>

        <section className="flex min-h-20 items-center justify-between rounded-xl border border-card bg-card px-5 py-3.5">
          <div className="flex min-w-0 items-center">
            <div className="mr-3 h-12 w-12 shrink-0 rounded-full bg-orange-500" />
            <div className="min-w-34">
              <div className="h-5 w-24 rounded bg-gray-700" />
              <div className="mt-2 h-3 w-28 rounded bg-gray-800" />
              <div className="mt-2 flex gap-1.5">
                <div className="h-4 w-12 rounded bg-gray-800" />
                <div className="h-4 w-24 rounded bg-gray-800" />
              </div>
            </div>
            <div className="ml-5 border-l border-card px-5">
              <div className="h-8 w-36 rounded bg-gray-700" />
              <div className="mt-2 h-3 w-28 rounded bg-gray-800" />
            </div>
          </div>

          <div className="hidden items-center gap-5 rounded-lg border border-card px-3 py-2 lg:flex">
            {["1H", "24H", "7D", "30D", "1Y"].map((period) => (
              <div key={period} className="min-w-10 text-center">
                <p className="text-[10px] text-gray-500">{period}</p>
                <div className="mx-auto mt-1 h-2.5 w-10 rounded bg-gray-800" />
              </div>
            ))}
          </div>

          <div className="ml-4 flex items-center gap-2">
            <button type="button" aria-label="Add to watchlist" className="flex h-9 w-9 items-center justify-center rounded-lg border border-card text-gray-500">
              <Star className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Share" className="flex h-9 w-9 items-center justify-center rounded-lg border border-card text-gray-500">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(290px,1fr)]">
          <div className="rounded-xl border border-card bg-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button type="button" className="rounded-lg bg-accent px-3.5 py-1.5 text-xs text-white">Price</button>
                <button type="button" className="rounded-lg border border-card px-3.5 py-1.5 text-xs text-gray-400">Market Cap</button>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center rounded-lg border border-card p-1 sm:flex">
                  <button type="button" aria-label="Line chart" className="flex h-7 w-7 items-center justify-center rounded bg-accent/20 text-accent">
                    <TrendingUp className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center rounded-lg border border-card p-1">
                  {["1H", "24H", "7D", "1M", "3M", "1Y", "ALL"].map((period) => (
                    <button
                      type="button"
                      key={period}
                      className={`rounded px-2.5 py-1 text-[10px] ${period === "24H" ? "bg-accent text-white" : "text-gray-500"}`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 h-72 rounded-lg border border-card" />
          </div>

          <aside className="rounded-xl border border-card bg-card p-4">
            <h2 className="text-base font-bold">Market Statistics</h2>
            <div className="mt-3 space-y-1">
              {[
                { icon: CircleDot, label: "Market Cap", info: true },
                { icon: Coins, label: "Fully Diluted Valuation" },
                { icon: Wallet, label: "24h Volume" },
              ].map((stat) => (
                <div key={stat.label} className="flex h-8 items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <stat.icon className="h-3.5 w-3.5" />
                    <span>{stat.label}</span>
                    {stat.info && <Info className="h-3 w-3 text-gray-600" />}
                  </div>
                  <div className="h-3 w-16 rounded bg-gray-800" />
                </div>
              ))}
              <div className="my-2 border-t border-card" />
              {[
                { icon: CircleDot, label: "Circulating Supply" },
                { icon: CircleDot, label: "Total Supply" },
                { icon: Coins, label: "Max Supply" },
              ].map((stat) => (
                <div key={stat.label} className="flex h-8 items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <stat.icon className="h-3.5 w-3.5" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="h-3 w-16 rounded bg-gray-800" />
                </div>
              ))}
              <div className="my-2 border-t border-card" />
              {[
                { icon: TrendingUp, label: "All-Time High" },
                { icon: TrendingDown, label: "All-Time Low" },
              ].map((stat) => (
                <div key={stat.label} className="flex h-8 items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <stat.icon className="h-3.5 w-3.5" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="h-3 w-20 rounded bg-gray-800" />
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-4 rounded-xl border border-card bg-card p-4">
          <h2 className="text-base font-bold">Technical &amp; Market Activity</h2>
          <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {["Trading Volume", "RSI (14)"].map((title) => (
              <div key={title}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span>{title}</span>
                    <Info className="h-3 w-3 text-gray-500" />
                  </div>
                  <div className="h-6 w-14 rounded border border-card" />
                </div>
                <div className="mt-2 h-44 rounded-lg border border-card" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-card bg-card p-4">
          <h2 className="text-base font-bold">About Bitcoin</h2>
          <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_1fr_0.7fr]">
            <div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-gray-800" />
                <div className="h-3 w-full rounded bg-gray-800" />
                <div className="h-3 w-4/5 rounded bg-gray-800" />
              </div>
              <div className="mt-3 h-3 w-20 rounded bg-gray-800" />
            </div>
            <div className="space-y-2.5 text-xs">
              {[
                ["Website", "https://bitcoin.org"],
                ["Whitepaper", "Bitcoin Whitepaper"],
                ["Blockchain", "Bitcoin"],
                ["Genesis Date", "Jan 3, 2009"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-gray-500" />
                  <span className="w-24 text-gray-400">{label}</span>
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Link2 className="h-3.5 w-3.5 text-gray-500" />
                <span className="w-24 text-gray-400">Categories</span>
                <div className="h-4 w-16 rounded bg-gray-800" />
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium">Community</h3>
              <div className="mt-2 space-y-2.5 text-xs">
                {[
                  ["X", "@Bitcoin"],
                  ["Reddit", "r/Bitcoin"],
                  ["GitHub", "bitcoin/bitcoin"],
                  ["Telegram", "Bitcoin"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center gap-2">
                    <CircleDot className="h-3.5 w-3.5 text-gray-500" />
                    <span className="w-16 text-gray-400">{label}</span>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
