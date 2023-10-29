import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  const timestamps = Object.keys(chartData);
  const fields = Object.keys(chartData[timestamps[0]]);

  const datasets = fields.map((field) => ({
    label: field,
    data: timestamps.map((timestamp) => chartData[timestamp][field]),
    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize the colors here
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
  }));

  const data = {
    labels: timestamps.map((timestamp) => new Date(parseInt(timestamp)).toLocaleDateString()),
    datasets: datasets,
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
