import React, { Component } from 'react'

export class NiftyData extends Component {
    render() {
        let {index, last, open} =this.props;
    return (
      <div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{index}</td>
      <td>{last}</td>
      <td>{open}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{index}</td>
      <td>{last}</td>
      <td>{open}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{index}</td>
      <td>{last}</td>
      <td>{open}</td>
    </tr>
  </tbody>
</table>
      </div>
    )
  }
}

export default NiftyData
