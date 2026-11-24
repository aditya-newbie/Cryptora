import { useQuery } from "@tanstack/react-query";
import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  CalendarDays,
  ChevronRight,
  CircleDot,
  Coins,
  Globe,
  Info,
  Link2,
  Share2,
  Star,
  Wallet,
} from "lucide-react";
import { useParams } from "react-router";
import { fetchCoinDetail, fetchCoinMarket } from "../../../../services/coingecko";
import { formatMatricPrefix, formatNumber } from "../../../../utils/format";
import { changeTextClass } from "../../../../utils/other";
import Description from "../../../../components/Description";
import { MarketTrend, RsiChart, TreadingVolume } from "../../../../components/AssetCharts";
import { useState } from "react";
import { getCurrentRsi } from "../../../../utils/calc";


export interface TimeSpan {
  time: string,
  days: string
}

const timeSpans: TimeSpan[] = [
  { time: "24H", days: "1" },
  { time: "7D", days: "7" },
  { time: "1M", days: "30" },
  { time: "3M", days: "90" },
  { time: "1Y", days: "365" },
]

const primaryChartOptions = ["Price", "Market Cap"]

export default function AssetDetails() {
  const { coinId } = useParams();
  const [activeTimeSpan, setActiveTimeSpan] = useState(timeSpans[0].days);
  const [activePrimaryChart, setActivePrimaryChart] = useState("Price")


  const coinDetailQuery = useQuery({
    queryKey: ["coinDetail", coinId],
    queryFn: () => fetchCoinDetail(coinId),
  });

  const MarketChartQuery = useQuery({
    queryKey: ["MarketChart", coinId, activeTimeSpan],
    queryFn: () => fetchCoinMarket(coinId, activeTimeSpan),
  });

  const coin = coinDetailQuery.data;
  const marketData = coin?.market_data;
  const athChange = marketData?.ath_change_percentage.inr;
  const atlChange = marketData?.atl_change_percentage.inr;
  const activeTime = timeSpans.find(timeSpan => timeSpan.days === activeTimeSpan)

  return (
    <main className="min-h-screen bg-canvas px-3 pb-7 text-white sm:px-6">
      <div className="mx-auto max-w-350">
        <div className="flex h-7 items-center gap-2 text-[10px] text-gray-400">
          <span className="text-accent">⌃ Markets</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-200">
            {coin?.name} ({coin?.symbol.toUpperCase()})
          </span>
        </div>

        <section className="flex min-h-18 items-center justify-between rounded-xl border border-card-border bg-card px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-3">
            <img className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" src={coinDetailQuery?.data?.image.large} />

            <div className="min-w-0">
              <h1 className="text-lg font-bold">{coin?.name}</h1>
              <p className="text-[10px] text-gray-300">
                {coin?.symbol.toUpperCase()}
                <span className="mx-1">•</span>
                Rank #{marketData?.market_cap_rank}
              </p>
              <div className="mt-1 flex gap-1">
                <span className="rounded-full border border-card-border px-2 py-0.5 text-[9px]">
                  {coin?.categories[1]}
                </span>
                <span className="rounded-full border border-card-border px-2 py-0.5 text-[9px]">
                  Store of Value
                </span>
              </div>
            </div>

            <div className="ml-1 border-l border-card-border pl-4 sm:ml-5 sm:pl-5">
              <p className="whitespace-nowrap text-xl font-bold tabular-nums sm:text-2xl">
                ₹{formatNumber(marketData?.current_price.inr)}
              </p>
              <p className="mt-1 whitespace-nowrap text-xs font-semibold text-green-400">
                {formatNumber(marketData?.price_change_24h)} (
                {formatNumber(marketData?.price_change_percentage_24h)}%)
                <span className="font-normal text-gray-300"> 24h</span>
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-4 border-r border-card-border px-3 sm:flex lg:gap-5">
            <div className="min-w-9 text-center">
              <p className="text-[10px]">24H</p>
              <p className="mt-1 text-[10px] font-semibold text-green-400">
                {formatNumber(marketData?.price_change_percentage_24h)}%
              </p>
            </div>
            <div className="min-w-9 text-center">
              <p className="text-[10px]">7D</p>
              <p className="mt-1 text-[10px] font-semibold text-green-400">
                {formatNumber(marketData?.price_change_percentage_7d)}%
              </p>
            </div>
            <div className="min-w-9 text-center">
              <p className="text-[10px]">30D</p>
              <p className="mt-1 text-[10px] font-semibold text-green-400">
                {formatNumber(marketData?.price_change_percentage_30d)}%
              </p>
            </div>
            <div className="min-w-9 text-center">
              <p className="text-[10px]">1Y</p>
              <p className="mt-1 text-[10px] font-semibold text-green-400">
                {formatNumber(marketData?.price_change_percentage_1y)}%
              </p>
            </div>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Add to watchlist"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent text-gray-200"
            >
              <Star className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Share"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border text-gray-200"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section className="mt-2.5 grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,2fr)_minmax(245px,1fr)]">
          <div className="rounded-xl border border-card-border bg-card p-3 sm:p-4">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-1.5">

                {primaryChartOptions.map(option => {
                  return (
                    <label key={option} className={`rounded-lg border bg-accent/20 px-3.5 py-1 ${activePrimaryChart === option
                      ? "border-accent bg-accent/20"
                      : "border-card-border text-gray-300"
                      }`} >
                      <span className="text-xs">{option}</span>
                      <input
                        type="radio"
                        name="primary-chart-option"
                        className="hidden"
                        value={option}
                        onChange={e => { setActivePrimaryChart(e.target.value) }}
                      />

                    </label>
                  )
                })}

              </div>
              <div className="flex items-center rounded-xl border-2 border-card-border">
                {timeSpans.map(timeSpan => {
                  return (
                    <label key={timeSpan.time} className={`px-1.5 rounded-lg ${timeSpan.days === activeTimeSpan
                      ? "bg-violet-500"
                      : ""
                      }`}>
                      <span className="text-xs text-gray-300">
                        {timeSpan.time}
                      </span>
                      <input
                        type="radio"
                        name="time-span"
                        className="hidden"
                        value={timeSpan.days}
                        onChange={(e) => setActiveTimeSpan(e.target.value)}
                      />
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="mt-1 h-50 sm:h-[250px]">
              <MarketTrend
                marketTrendData={
                  activePrimaryChart === "Price"
                    ? MarketChartQuery?.data?.price
                    : MarketChartQuery?.data?.market_caps
                }
                timeSpan={activeTime}
              />
            </div>
          </div>

          <aside className="rounded-xl border border-card-border bg-card p-3 sm:p-4">
            <h2 className="text-sm font-bold">Market Statistics</h2>
            <div className="mt-1.5">
              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 border-b border-card-border/70 text-[12px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <CircleDot className="size-3 shrink-0" />
                  Market Cap
                  <Info className="h-2.5 w-2.5 text-gray-500" />
                </span>
                <span className="shrink-0">₹{formatMatricPrefix(coinDetailQuery?.data?.market_data.market_cap.inr)}</span>
              </div>
              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 border-b border-card-border/70 text-[12px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <Coins className="size-3 shrink-0" />
                  Fully Diluted Valuation
                </span>
                <span className="shrink-0">₹{formatMatricPrefix(coinDetailQuery?.data?.market_data.fully_diluted_valuation.inr)}</span>
              </div>
              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 border-b border-card-border/70 text-[12px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <Wallet className="h-3 w-3 shrink-0" />
                  24h Volume
                </span>
                <span className="shrink-0">₹{formatMatricPrefix(coinDetailQuery?.data?.market_data.total_volume.inr)}</span>
              </div>

              <div className="my-1 border-t border-card-border" />

              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 border-b border-card-border/70 text-[12px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <CircleDot className="h-3 w-3 shrink-0" />
                  Circulating Supply
                </span>
                <span className="shrink-0">{formatMatricPrefix(coinDetailQuery?.data?.market_data.circulating_supply)} {coinDetailQuery?.data?.symbol.toUpperCase()}</span>
              </div>
              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 border-b border-card-border/70 text-[12px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <CircleDot className="h-3 w-3 shrink-0" />
                  Total Supply
                </span>
                <span>{formatMatricPrefix(coinDetailQuery?.data?.market_data.total_supply)} {coinDetailQuery?.data?.symbol.toUpperCase()}</span>
              </div>
              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 border-b border-card-border/70 text-[12px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <Coins className="h-3 w-3 shrink-0" />
                  Max Supply
                </span>
                <span>{formatMatricPrefix(coinDetailQuery?.data?.market_data.max_supply)} {coinDetailQuery?.data?.symbol.toUpperCase()}</span>
              </div>

              <div className="my-2 border-t border-card-border" />

              <div className="flex mb-1.5 min-h-[22px] items-center justify-between gap-2 text-[14px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <ArrowUpRight className="h-3 w-3" />
                  All-Time High
                  <Info className="h-2.5 w-2.5 text-gray-500" />
                </span>
                <span>
                  ₹{marketData?.ath.inr}{" "}
                  <span className={changeTextClass(athChange)}>
                    ({formatNumber(athChange)}%)
                  </span>
                </span>
              </div>
              <div className="flex mb-1 min-h-[22px] items-center justify-between gap-2 text-[14px]">
                <span className="flex items-center gap-2 text-gray-200">
                  <ArrowDownRight className="h-3 w-3" />
                  All-Time Low
                </span>
                <span>
                  ₹{marketData?.atl.inr}{" "}
                  <span className={changeTextClass(atlChange)}>
                    ({formatNumber(atlChange)}%)
                  </span>
                </span>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-2.5 rounded-xl border border-card-border bg-card p-3 sm:p-4">
          <h2 className="text-sm font-bold">Technical &amp; Market Activity</h2>
          <div className="mt-2 grid grid-cols-1 gap-2.5 md:grid-cols-2">
            <div className="rounded-xl border border-card-border p-2.5">
              <div className="mb-1 flex items-center justify-between text-[10px]">
                <span className="flex items-center gap-1.5 font-semibold">
                  Trading Volume
                  <Info className="h-3 w-3 text-gray-400" />
                </span>

              </div>
              <div className="h-[105px]">
                <TreadingVolume volumeData={MarketChartQuery?.data?.total_volumes} timeSpan={activeTime} />
              </div>
            </div>

            <div className="rounded-xl border border-card-border p-2.5">
              <div className="mb-1 flex items-center justify-between text-[10px]">
                <span className="flex items-center gap-1.5 font-semibold">
                  RSI (14)
                  <Info className="h-3 w-3 text-gray-400" />
                </span>
                <span className="font-bold">
                  {getCurrentRsi(MarketChartQuery?.data?.price, activeTime?.time)}
                  <span className="ml-1 rounded-full border border-card-border px-2 py-0.5 text-[9px] font-normal text-gray-300">
                    Neutral
                  </span>
                </span>
              </div>
              <div className="h-[105px]">
                <RsiChart coinId={coinId} timeSpan={activeTime} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-2.5 rounded-xl border border-card-border bg-card p-3 sm:p-4">
          <h2 className="text-base font-bold">About Bitcoin</h2>
          <div className="mt-1.5 grid gap-4 text-[10px] sm:grid-cols-[1.15fr_1fr_0.7fr]">
            <Description description={coinDetailQuery?.data?.description.en ?? ''} />

            <div className="space-y-0.5 sm:border-r sm:border-card-border sm:pr-4">
              <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                <Globe className="h-3 w-3 shrink-0 text-gray-400" />
                <span className="w-20 shrink-0 text-gray-200">Website</span>
                <a className="truncate text-purple-300 underline" href={coinDetailQuery?.data?.links.homepage[0]} target="blank">
                  {coinDetailQuery?.data?.links.homepage[0]}
                </a>
              </div>
              <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                <Blocks className="h-3 w-3 shrink-0 text-gray-400" />
                <span className="w-20 shrink-0 text-gray-200">Whitepaper</span>
                <a className="truncate text-purple-300 underline" href={coinDetailQuery?.data?.links.whitepaper} target="blank">
                  {coinDetailQuery?.data?.links.whitepaper}
                </a>
              </div>
              <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                <CircleDot className="h-3 w-3 shrink-0 text-gray-400" />
                <span className="w-20 shrink-0 text-gray-200">Blockchain</span>
                <a className="w-70 truncate text-purple-300 underline whitespace-nowrap overflow-hidden" href={coinDetailQuery?.data?.links.blockchain_site[0]} target="blank">
                  {coinDetailQuery?.data?.links.blockchain_site[0]}...
                </a>
              </div>
              <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                <CalendarDays className="h-3 w-3 shrink-0 text-gray-400" />
                <span className="w-20 shrink-0 text-gray-200">Genesis Date</span>
                <span className="truncate text-purple-300">{coinDetailQuery?.data?.genesis_date}</span>
              </div>
              <div className="flex min-h-5 items-center gap-2">
                <Link2 className="h-3 w-3 shrink-0 text-gray-400" />
                <span className="w-20 shrink-0 text-gray-200">Categories</span>
                <span className="min-h-[18px] min-w-10 rounded-full border border-card-border px-2 py-0.5 text-[9px]">
                  {coinDetailQuery?.data?.categories[1]}
                </span>
                <span className="rounded-full border border-card-border px-2 py-0.5 text-[9px]">
                  Store of Value
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-medium">Community</h3>
              <div className="mt-1 space-y-0.5">
                <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                  <CircleDot className="h-3 w-3 shrink-0 text-gray-400" />
                  <span className="w-14 shrink-0 text-gray-200">X</span>
                  <span className="truncate text-purple-300">{coinDetailQuery?.data?.links.twitter_screen_name}</span>
                </div>
                <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                  <CircleDot className="h-3 w-3 shrink-0 text-gray-400" />
                  <span className="w-14 shrink-0 text-gray-200">Reddit</span>
                  <a href={coinDetailQuery?.data?.links.subreddit_url ?? ""} target="blank" className="truncate text-purple-300">{coinDetailQuery?.data?.links.subreddit_url}</a>
                </div>
                <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                  <CircleDot className="h-3 w-3 shrink-0 text-gray-400" />
                  <span className="w-14 shrink-0 text-gray-200">GitHub</span>
                  <a href={coinDetailQuery.data?.links.repos_url.github[0] ?? ""} target="blank" className="truncate text-purple-300">{coinDetailQuery.data?.links.repos_url.github[0]}</a>
                </div>
                <div className="flex min-h-5 items-center gap-2 border-b border-card-border/70">
                  <CircleDot className="h-3 w-3 shrink-0 text-gray-400" />
                  <span className="w-14 shrink-0 text-gray-200">Telegram</span>
                  <span className="truncate text-purple-300">{coinDetailQuery?.data?.links.telegram_channel_identifier}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </main >
  );
}
