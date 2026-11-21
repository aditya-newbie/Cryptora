import { ResponsiveContainer, LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts";
import dayjs from "dayjs"
import type { ChartData } from "../types/Coin";
import { getPriceTicks, getTimeTicks } from "../utils/format";

interface PriceChartProp {
  priceChartData: ChartData[] | undefined;
  timeSpan: string;
  gain: boolean;
}

export default function PriceMarCapChart({ priceChartData, timeSpan, gain }: PriceChartProp) {

  if (!priceChartData) {
    return null
  }

  return (
    <ResponsiveContainer>
      <LineChart data={priceChartData}>
        <CartesianGrid />
        <XAxis
          dataKey="time"
          type="number"
          ticks={getTimeTicks(priceChartData)}
          tickFormatter={(timeMs) => {
            switch (timeSpan) {
              case "24h":
                return dayjs(timeMs).format("ha");
              case "7d":
                return dayjs(timeMs).format("dddd");
              case "1m":
                return dayjs(timeMs).format("D MMM");
              case "3m":
                return dayjs(timeMs).format("D MMM");
              case "1y":
                return dayjs(timeMs).format("MMM");
              default:
                return dayjs(timeMs).format("DD MMM YYYY")
            }
          }}
        />
        <YAxis
          type="number"
          ticks={getPriceTicks(priceChartData)}
          tickFormatter={(price) => {
            if (price < 1) {
              return String(price.toFixed(6))
            } else if (price < 10) {
              return String(price.toFixed(4))
            } else if (price < 1000) {
              return String(price.toFixed(2))
            } else if (price < 10 ** 6) {
              return `${(price / 1000).toFixed(1)}k`
            } else if (price < 10 ** 9) {
              return `${(price / 10 ** 6).toFixed(2)}M`
            } else if (price < 10 ** 12) {
              return `${(price / 10 ** 9).toFixed(2)}B`
            } else {
              return `${(price / 10 ** 12).toFixed(2)}T`
            }
          }}
        />
        <Line
          type="linear"
          dataKey="price"
          stroke={
            gain ? "#059669" : "#E11D48"
          }
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}