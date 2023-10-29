import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import LineChart from './Chart/LineChart';


const stockOptions = ["", "SBIN.NS", "AAPL", "GOOGL", "TSLA", "AMZN"];

function UserInput({ sendDataToBackend, ChartData }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [stockIndex, setStockIndex] = useState(''); // Initialize stockIndex with an empty string
  const [feedback, setFeedback] = useState('');

  const handleSendData = () => {
    if (stockIndex.trim() === '' || startDate.trim() === '' || endDate.trim() === '') {
      setFeedback('Please enter both the stock index, start date, and end date.');
      return;
    }

    const inputData = {
      index: stockIndex,
      start_date: startDate,
      end_date: endDate,
    };

    sendDataToBackend(inputData)
      .then(() => {
        setFeedback('Data sent successfully.');
        setStartDate('');
        setEndDate('');
        setStockIndex(''); // Reset stockIndex to an empty string after successful data submission
      })
      .catch((error) => {
        setFeedback('Error sending data: ' + error.message);
      });
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendData();
    }
  }

  const handleStockIndexChange = (value) => {
    setStockIndex(value);
  }

  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <>
      <h1 className='stocks-heading'>Enter desrired credentials </h1>
      <div className='flex my-10 mx-5 justify-between items-center gap-5'>
        <div className="flex items-center">
          <div className="relative">
            <input
              name="start"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="urbanist bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <input
              name="end"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="urbanist bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date end"
            />
          </div>


          <div className="w-72 mx-6 urbanist">
            <Select
              label="Choose a Stock Index"
              placeholder='Choose'
              value={stockIndex} // Use the stockIndex state for the value
              onChange={handleStockIndexChange} // Update the stockIndex state using a custom handler
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >

              {stockOptions.map((option) => (
                <Option key={option} value={option} defaultValue="SBIN.NS">
                  <p className='urbanist'> {option}</p>
                </Option>
              ))}
            </Select>
          </div>
        </div>

        <div className='flex justify-center gap-7'>
          <Button onClick={handleSendData}>
            <p className='urbanist flex justify-center gap-3 items-center' style={{ width: "10vw" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span>Search for Data</span> </p>
          </Button>

          <Button onClick={() => handleOpen("xl")} variant="gradient">
            <p className='urbanist flex justify-center gap-3 items-center' style={{ width: "10vw" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>

              <span>Show chart view</span> </p>
          </Button>
        </div>

        <Dialog
          open={size === "xl"}
          size={size || "md"}
          handler={handleOpen}
        >
          <DialogHeader> <p className='urbanist my-3'>Chart View for your data - </p></DialogHeader>
          <DialogBody>
            <LineChart data={ChartData} />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span className='urbanist'>OKAY</span>
            </Button>
          </DialogFooter>
        </Dialog>
        {/* {feedback && <div className="text-red-500">{feedback}</div>} */}
      </div>
    </>
  );
}

export default UserInput;



