import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import { formatMatricPrefix, formatNumber } from "../utils/format";
import MiniChart from "./MiniChart";
import { convertChartData } from "../utils/mutate";
import type MarketCoin from "../types/MarketCoin";
import { Link } from "react-router";

interface AssetTableProps {
  marketData: MarketCoin[];
}

const gridTemplateColumns =
  "minmax(42px, 0.35fr) minmax(180px, 1.6fr) minmax(120px, 1fr) minmax(90px, 0.7fr) minmax(90px, 0.7fr) minmax(130px, 1.1fr) minmax(130px, 1.1fr) minmax(180px, 1.5fr) minmax(120px, 1fr)";

export default function AssetTable({ marketData }: AssetTableProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/incompatible-library
  const virtualizer = useVirtualizer({
    count: marketData.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 65,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      ref={scrollContainerRef}
      className="mt-6 max-h-[70vh] overflow-auto scrollbar-thumb-slate-700 rounded-xl border border-card bg-card"
    >
      <table className="grid min-w-270 w-full text-sm">
        <thead className="sticky top-0 z-10 grid bg-card">
          <tr
            className="grid w-full border-b border-card text-left text-xs text-gray-500"
            style={{ gridTemplateColumns }}
          >
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

        <tbody
          className="relative grid"
          style={{ height: `${virtualizer.getTotalSize()}px` }}
        >
          {virtualItems.map((virtualItem) => {
            const coin = marketData[virtualItem.index];

            return (
              <tr
                key={coin.id}
                className="absolute left-0 top-0 grid w-full border-b border-card hover-card"
                style={{
                  height: `${virtualItem.size}px`,
                  gridTemplateColumns,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <td className="flex items-center px-5 py-4 text-gray-400">
                  {coin.market_cap_rank}
                </td>
                <Link to={`/market/${coin.id}`} className="flex min-w-0 items-center px-5 py-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      className="h-8 w-8 shrink-0 rounded-full"
                      src={coin.image}
                      alt=""
                    />
                    <div className="min-w-0 truncate">
                      <span className="font-medium">{coin.name}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        {coin.symbol}
                      </span>
                    </div>
                  </div>
                </Link>
                <td className="flex items-center px-5 py-4 font-medium tabular-nums">
                  ₹{coin.current_price}
                </td>
                <td
                  className={`flex items-center px-5 py-4 tabular-nums ${coin.price_change_percentage_24h >= 0
                      ? "text-gain"
                      : "text-loss"
                    }`}
                >
                  {formatNumber(coin.price_change_percentage_24h)}%
                </td>
                <td
                  className={`flex items-center px-5 py-4 tabular-nums ${(coin.price_change_percentage_7d_in_currency ?? 0) >= 0
                      ? "text-gain"
                      : "text-loss"
                    }`}
                >
                  {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                </td>
                <td className="flex items-center px-5 py-4 tabular-nums">
                  ₹{formatMatricPrefix(coin.market_cap)}
                </td>
                <td className="flex items-center px-5 py-4 tabular-nums">
                  ₹{formatMatricPrefix(coin.total_volume)}
                </td>
                <td className="flex items-center px-5 py-4 tabular-nums">
                  {formatMatricPrefix(coin.circulating_supply)}{" "}
                  {coin.symbol.toUpperCase()}
                </td>
                <td className="flex items-center px-5 py-4">
                  <div className="h-8 w-24 rounded bg-gray-800/50">
                    <MiniChart
                      data={convertChartData(coin.sparkline_in_7d?.price)}
                      gain={
                        (coin.price_change_percentage_7d_in_currency ?? 1) >= 0
                      }
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
