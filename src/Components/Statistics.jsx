import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Assignment-1",
    value: 60,
  },
  {
    name: "Assignment-2",
    value: 60,
  },
  {
    name: "Assignment-3",
    value: 60,
  },
  {
    name: "Assignment-4",
    value: 58,
  },
  {
    name: "Assignment-5",
    value: 60,
  },
  {
    name: "Assignment-6",
    value: 54,
  },
  {
    name: "Assignment-7",
    value: 60,
  },
  {
    name: "Assignment-8",
    value: 60,
  },
];

const COLORS = [
  "#00C49E",
  "#cfabe3",
  "#800000",
  "#2596be",
  "#8884d8",
  "#334244",
  "#ffc658",
  "#000080",
];

const Statistics = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between h-40 bg-purple-100">
        <img
          src="https://i.ibb.co/4V7V2m4/Vector.png"
          alt="Image 1"
          className="w-1/6 h-50 object-cover"
        />
        <img
          src="https://i.ibb.co/9vx46mz/Vector-1.png"
          alt="Image 2"
          className="w-1/6 mb-40 h-50 object-cover"
        />
      </div>
      <div className=" absolute inset-0 ">
        <div className="text-black">
          <h1 className="text-4xl font-bold text-center mt-8">Statistics</h1>
        </div>
      </div>

      <div className="w-full lg:w-75">
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={130}
              fill="#8884d8"
              label={(entry) => `${entry.name}: ${entry.value}`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
