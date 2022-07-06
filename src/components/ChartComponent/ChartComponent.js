import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = ({ dataForChart }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <BarChart
        width={1500}
        height={500}
        data={dataForChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {console.log(dataForChart)}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="userMail" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="numberOfReservation" fill="#009933" />
      </BarChart>
    </div>
  );
};

export default ChartComponent;
