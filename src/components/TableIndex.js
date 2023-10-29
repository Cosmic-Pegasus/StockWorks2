import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import NiftyData from './NiftyData';
import {Index} from './TableHead';


export class TableIndex extends Component {
  
  constructor(props) {
    super(props) 
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true})
    const response = await fetch(`http://127.0.0.1:5000/sector/${Index}`)
    if (response.ok) {
      const users = await response.json()
      this.setState({users, isLoading:false})
    }
    else {
      this.setState({isError: true, isLoading: false})
    }
  }

  renderTableRows = () => {
    let counter=0;
    return this.state.users.map(user => {
      counter++;
      return (
        <tr key={user.index}>
          <td>{counter}</td>
          <td>{user.last}</td>
          <td>{user.open}</td>
          <td>{user.high}</td>
          <td>{user.low}</td>
          <td>{user.previousClose}</td>
          <td>{user.variation}</td>
        </tr>
      )
    })
  }


  render() {
    const { users, isLoading, isError } = this.state
    if (isLoading) {
      return <div>Loading...</div> 
    }
    if (isError) {
      return <div>Error</div>
    }
    return users.length > 0 ? (
      <>
      <div className="container-fluid">
      <h1 className='text-center' style={{paddingTop:"1rem", paddingBottom:"1rem"}}>{Index}</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">last</th>
            <th scope="col">open</th>
            <th scope="col">high</th>
            <th scope="col">low</th>
            <th scope="col">prevClose</th>
            <th scope="col">variation</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
      </div>
      </>
    ) : (<div>No stocks</div>)
  }
}

export default TableIndex

