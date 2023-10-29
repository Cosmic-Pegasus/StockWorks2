import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Spinner } from "@material-tailwind/react";

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
    const ctx2 = document.getElementById('currencyexchange');

    const maxLabels = 10; // Set the maximum number of labels on the X-axis

    new Chart(ctx2, {
      type: 'bar',
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
            borderColor: 'rgba(235, 215, 205, 1)',
            borderWidth: 1,
            fill: true,
            borderRadius:'5',
            backgroundColor:"rgba(15, 15, 15, 1)"
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
                maxTicksLimit: 8,
      
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
        <div className="dash-chart-main">
          <h2 className="urbanist mb-3">Digital Currency Monthly Chart (BTC to CNY)</h2>
          <canvas id="currencyexchange" className='main-chart' width="400" height="200"></canvas>
        </div>
      )}
    </div>
  );
};

export default DigitalCurrencyChart;

