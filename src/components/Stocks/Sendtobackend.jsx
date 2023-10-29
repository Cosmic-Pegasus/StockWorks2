import React, { useState, useEffect } from 'react';
import UserInput from './UserInput';
import DataTable from './DataTable';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import ChartComponent from './ChartComponent';
import ChartHome from './Chart/ChartHome';
import LineChart from './Chart/LineChart';



function Sendtobackend() {
    var [data, setData] = useState([]);

    const sendDataToBackend = async (userInput) => {
        try {
            const response = await fetch('api/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInput), // Convert userInput to JSON
            });

            if (response.ok) {
                console.log(response);
                const processedData = await response.json(); // Parse response as JSON
                setData(processedData);
                console.log(processedData); // Log the processed data
            } else {
                console.error('Failed to process data. HTTP status:', response.status);
                console.log(await response.text()); // Log the response content

            }
        } catch (error) {
            console.error('API request failed:', error);
        }
    };


    return (
        <div className='datatable'>
            <Sidebar />
                <Navbar b1={"Stocks"}/>
            <div className='datatable-component'>
                <UserInput sendDataToBackend={sendDataToBackend} ChartData={data} />
                <DataTable data={data} />
                {/* <LineChart data={data} /> */}
        
            </div>
        </div>
    );
}


export default Sendtobackend;