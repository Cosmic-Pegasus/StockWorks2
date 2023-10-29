import React from "react";
import BarChart from "./Barchart"; // Import the BarChart component
// Other imports...

function ChartHome({ UserData }) {
  // Convert the object into an array
  const parsedData = Object.keys(UserData).map((timestamp) => ({
    Timestamp: new Date(parseInt(timestamp)),
    ...UserData[timestamp],
  }));

  // Ensure that parsedData is an array
  if (!Array.isArray(parsedData)) {
    return (
      <div className="App">
        <p>Invalid data format. Expected an array.</p>
      </div>
    );
  }

  // Check if parsedData is not empty
  if (parsedData.length === 0) {
    return (
      <div className="App">
        <p>No data available.</p>
      </div>
    );
  }

  const chartData = {
    labels: parsedData.map((data) => data.Timestamp),
    datasets: [
      {
        label: "Open",
        data: parsedData.map((data) => data.Open),
        borderColor: "rgba(39, 39, 39, 1)",
      },
      {
        label: "High",
        data: parsedData.map((data) => data.High),
        borderColor: "#603060",
      },
      {
        label: "Low",
        data: parsedData.map((data) => data.Low),
        borderColor: "#408060",
      },
      {
        label: "Close",
        data: parsedData.map((data) => data.Close),
        borderColor: "#503060",
      },
      {
        label: "Adj Close",
        data: parsedData.map((data) => data["Adj Close"]),
        borderColor: "#303060",
      },
      {
        label: "Volume",
        data: parsedData.map((data) => data.Volume),
        borderColor: "#203060",
      },
    ],
  };

  return (
    <div className="App">
      <BarChart chartData={chartData} /> {/* Use BarChart instead of LineChart */}
    </div>
  );
}

export default ChartHome;
