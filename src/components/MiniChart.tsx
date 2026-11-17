import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

interface Data {
  price: number;
  time: number;
}

interface props {
  data: Data[];
  gain: boolean;
}

export default function MiniChart({ data, gain }: props) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <LineChart
        data={data}
        margin={{
          top: 2,
          right: 2,
          bottom: 2,
          left: 2,
        }}
      >
        <XAxis dataKey="time" hide />
        <YAxis
          hide
          domain={["dataMin", "dataMax"]}
        />
        <Line
          type="linear"
          dataKey="price"
          stroke={
            gain ? "#059669" : "#E11D48"
          }
          strokeWidth={1.1}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}