import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from "@material-tailwind/react";

import Chart from 'chart.js/auto';

const DigitalCurrencyChart = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace with your Alpha Vantage API endpoint and API key
    const apiKey = 'demo';
    const currencySymbol = 'BTC'; // Example: Bitcoin (BTC)
    const market = 'CNY'; // Example: Chinese Yuan (CNY)

    axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${currencySymbol}&market=${market}&apikey=${apiKey}`)
      .then(response => {
        const data = response.data['Time Series (Digital Currency Monthly)'];
        const monthlyDataArray = Object.keys(data).map(date => {
          return {
            date,
            price: parseFloat(data[date]['4b. close (USD)']),
          };
        });
        setMonthlyData(monthlyDataArray.reverse()); // Reverse data for chronological order
        setIsLoading(false);

        // Create the chart after data is loaded
        createLineChart(monthlyDataArray);
      })
      .catch(error => {
        console.error('Error fetching digital currency data:', error);
        setIsLoading(false);
      });
  }, []);

  const createLineChart = (data) => {
    const ctx = document.getElementById('digitalCurrencyChart');

    const maxLabels = 10; // Set the maximum number of labels on the X-axis

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((entry, index) => {
          // Display labels for every n data points
          if (index % Math.ceil(data.length / maxLabels) === 0) {
            return entry.date;
          } else {
            return '';
          }
        }),
        datasets: [
          {
            label: 'Price (USD)',
            data: data.map(entry => entry.price),
            borderColor: 'rgba(0, 10, 20, 1)',
            borderWidth: 1,
            fill: false,
            backgroundColor:"rgb(255,215,210)"
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
                autoSkip: true,
                font: {
                  family: 'Urbanist', // Your font family
                  size: 14,
                },
      
              },
          },
          x: {
            grid: {
             // Hide the X-axis gridlines
            },
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
  };

  return (
    <div className="digital-currency-chart">
      {isLoading ? (
        <p><Spinner/></p>
      ) : (
        <div className="dash-chart">
          <h2 className="urbanist mb-3">Digital Currency Monthly Chart (BTC to CNY)</h2>
          <canvas id="digitalCurrencyChart" width="400" height="200"></canvas>
        </div>
      )}
    </div>
  );
};

export default DigitalCurrencyChart;

