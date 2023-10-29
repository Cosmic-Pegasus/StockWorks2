import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function calculateYAxisRange(min, max, step) {
  const newMin = Math.floor(min / step) * step;
  const newMax = Math.ceil(max / step) * step;
  return [newMin, newMax];
}

function LineChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Extract timestamps and "Open," "High," and "Low" values from your data
    const timestamps = Object.keys(data);
    const openValues = timestamps.map((timestamp) => data[timestamp].Open);
    const highValues = timestamps.map((timestamp) => data[timestamp].High);
    const lowValues = timestamps.map((timestamp) => data[timestamp].Low);

    if (chartRef.current) {
      // If a chart exists, destroy it before creating a new one
      chartRef.current.destroy();
    }

    // Calculate Y-axis range with intervals of 10
    const minOpenValue = Math.min(...openValues);
    const maxOpenValue = Math.max(...openValues);
    const minHighValue = Math.min(...highValues);
    const maxHighValue = Math.max(...highValues);
    const minLowValue = Math.min(...lowValues);
    const maxLowValue = Math.max(...lowValues);

    const [minY, maxY] = calculateYAxisRange(
      Math.min(minOpenValue, minHighValue, minLowValue),
      Math.max(maxOpenValue, maxHighValue, maxLowValue),
      10
    );

    // Get the canvas element
    const ctx = document.getElementById('openLineChart').getContext('2d');

    // Create the chart
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps.map((timestamp) => new Date(parseInt(timestamp)).toDateString()),
        datasets: [
          {
            label: 'Open Value',
            data: openValues,
            borderColor: 'blue',
            borderWidth: 2, // Adjust this value to control line thickness
          },
          {
            label: 'High Value',
            data: highValues,
            borderColor: 'red',
            borderWidth: 2, // Adjust this value to control line thickness
          },
          {
            label: 'Low Value',
            data: lowValues,
            borderColor: 'black',
            borderWidth: 2, // Adjust this value to control line thickness
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                family: 'Urbanist'
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              font: {
                family: 'Urbanist', // Your font family
                size: 14,
              },
            }
          },
          y: {
            beginAtZero: false,
            min: minY,
            max: maxY,
            ticks: {
              autoSkip: true,
              font: {
                family: 'Urbanist', // Your font family
                size: 14,
              },
              stepSize: 10,
            },
          },
        },
      },
    });
  }, [data]);

  return (
    <div className='chartcanvas'><canvas id="openLineChart" className='urbansit'></canvas></div>
  );
}

export default LineChart;
