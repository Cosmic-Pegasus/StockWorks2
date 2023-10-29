import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';

function ChartComponent({ userData }) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (userData) {
            const data = JSON.parse(userData);

            if (chart) {
                // If a chart already exists, destroy it before creating a new one
                chart.destroy();
            }

            // Extract data for the chart
            const timestamps = data.map(item => new Date(item.Timestamp)); // Convert timestamps to Date objects
            const openPrices = data.map(item => item.Open);
            const highPrices = data.map(item => item.High);
            const lowPrices = data.map(item => item.Low);
            const closePrices = data.map(item => item.Close);
            const volume = data.map(item => item.Volume);

            // Create a chart using Chart.js
            const ctx = document.getElementById('myChart').getContext('2d');
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timestamps,
                    datasets: [
                        {
                            label: 'Open Prices',
                            data: openPrices,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1,
                        },
                        {
                            label: 'High Prices',
                            data: highPrices,
                            borderColor: 'rgb(192, 75, 75)',
                            tension: 0.1,
                        },
                        {
                            label: 'Low Prices',
                            data: lowPrices,
                            borderColor: 'rgb(75, 75, 192)',
                            tension: 0.1,
                        },
                        {
                            label: 'Close Prices',
                            data: closePrices,
                            borderColor: 'rgb(192, 192, 75)',
                            tension: 0.1,
                        },
                        {
                            label: 'Volume',
                            data: volume,
                            borderColor: 'rgb(192, 75, 192)',
                            tension: 0.1,
                        },
                    ],
                },
                
            });

            setChart(newChart);
        }
    }, [userData]);

    return (
        <div>
            <canvas id="myChart" width="400" height="200"></canvas>
        </div>
    );
}

export default ChartComponent;
