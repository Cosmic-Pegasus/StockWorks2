import React from 'react'
import './script.js';

const Table = (props) => {
    return (
      <div>
        <h1 className="text-center">SECTOR</h1>
        <div className="container">
        <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">index</th>
            <th scope="col">last</th>
            <th scope="col">open</th>
            <th scope="col">high</th>
            <th scope="col">low</th>
            <th scope="col">prevClose</th>
            <th scope="col">variation</th>
          </tr>
        </thead>
        <tbody id="table_body">
             
        </tbody>
      </table>
    </div>
      </div>
  )
}

export default Table
