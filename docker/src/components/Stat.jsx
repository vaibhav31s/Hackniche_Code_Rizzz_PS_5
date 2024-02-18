import React, { PureComponent, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D" },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

const Stat = ({
  data = [
    { name: "A", uv: 4000 },
    { name: "B", uv: 3000 },
    { name: "C", uv: 2000 },
    { name: "D" },
    { name: "E", uv: 1890 },
    { name: "F", uv: 2390 },
    { name: "G", uv: 5490 },
  ],
  title = "CPU Usage",
}) => {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="text-xl font-semibold mb-5">
        {title}: {data[data.length - 1]?.uv}
      </h1>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="usage"
            stroke="#00ff1e"
            fill="#00ff1e"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stat;
