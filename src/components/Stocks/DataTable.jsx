


import React from 'react';

function DataTable({ data }) {
  const timestamps = Object.keys(data);

  if (timestamps.length === 0) {
    return <div className=' my-7 mx-7 urbanist'>No data available.</div>;
  }

  const firstTimestamp = timestamps[0];

  const columns = Object.keys(data[firstTimestamp]);

  return (
    <div className="overflow-x-hidden mb-10 border-gray-300 rounded-lg">
      <table className="min-w-full urbanist mx-6 border rounded-lg" >
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-200 bg-gray-100">Timestamp</th>
            {columns.map((column) => (
              <th key={column} className="px-4 py-2 text-left border-b border-gray-200 bg-gray-100">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timestamps.map((timestamp) => (
            <tr key={timestamp}>
              <td className="px-4 py-2 text-left border-b border-gray-200">{new Date(parseInt(timestamp)).toDateString()}</td>
              {columns.map((column) => (
                <td key={column} className="px-4 py-2 text-left border-b border-gray-200">
                  {data[timestamp][column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
