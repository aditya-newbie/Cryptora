import { ResponsiveContainer, LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip } from "recharts";
import dayjs from "dayjs"
import type { ChartData } from "../types/Coin";
import { getPriceTicks, getTimeTicks } from "../utils/format";
import type { TimeSpan } from "../app/routes/app/pages/AssetDetails";

interface PriceChartProp {
  priceChartData: ChartData[] | undefined;
  timeSpan: TimeSpan | undefined;
}

export default function PriceMarCapChart({ priceChartData, timeSpan }: PriceChartProp) {

  if (!priceChartData || !timeSpan) {
    return null
  }
  const time = timeSpan.time
  const gain = priceChartData[0].price < priceChartData[priceChartData.length - 1].price
  console.log(time)
  return (
    <ResponsiveContainer>
      <LineChart data={priceChartData}>
        <CartesianGrid
          vertical={false}
          stroke="#64748b"
          strokeOpacity={0.2}
          strokeDasharray="3 3"
        />
        <Tooltip
          cursor={{ stroke: "#94A3B8", strokeWidth: 1, strokeDasharray: "3 3" }}
          content={({ active, payload, label }) => {
            if (!active || !payload?.length) {
              return null
            }

            const point = payload[0]
            const price = typeof point.value === "number"
              ? point.value
              : Number(point.value)

            if (!Number.isFinite(price)) {
              return null
            }

            return (
              <div className="rounded-lg border border-card-border bg-canvas px-3 py-2 text-xs shadow-lg">
                <p className="mb-1 text-gray-400">
                  {dayjs(label).format(time === "24H" ? "DD MMM, ha" : "DD MMM YYYY, h:mm A")}
                </p>
                <p className="font-semibold tabular-nums text-white">
                  ₹{price.toLocaleString("en-IN", {
                    maximumFractionDigits: price < 1 ? 6 : 2,
                  })}
                </p>
              </div>
            )
          }}
        />
        <XAxis
          dataKey="time"
          type="number"
          tick={{ fill: "#64748B", fontSize: 12 }}
          ticks={getTimeTicks(priceChartData)}
          tickFormatter={(timeMs) => {
            switch (time) {
              case "24H":
                return dayjs(timeMs).format("ha");
              case "7D":
                return dayjs(timeMs).format("ddd");
              case "1M":
                return dayjs(timeMs).format("D MMM");
              case "3M":
                return dayjs(timeMs).format("D MMM");
              case "1Y":
                return dayjs(timeMs).format("MMM");
              default:
                return dayjs(timeMs).format("DD MMM YYYY")
            }
          }}
        />
        <YAxis
          type="number"
          tick={{ fill: "#64748B", fontSize: 12 }}
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
          dot={false}
          activeDot={{
            r: 5,
            fill: "#241e41",
            stroke: "#afafaf",
            strokeWidth: 2,
          }}
          isAnimationActive={true}
          animationDuration={600}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}