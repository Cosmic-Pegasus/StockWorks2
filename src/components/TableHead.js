import React, { Component } from 'react'
import Array from './TableItems'

import { Link } from 'react-router-dom'
//import TableIndex from './TableIndex'
//import PropTypes from 'prop-types'

export let Index = "NIFTY AUTO"

class TableHead extends Component {
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
    const response = await fetch('http://127.0.0.1:5000/sector/NIFTY%20AUTO')
    if (response.ok) {
      const users = Array
      // const users = await response.json()
      this.setState({users, isLoading:false})
    }
    else {
      this.setState({isError: true, isLoading: false})
    }
    console.log(Array);
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr=><th key={attr}>{attr.toUpperCase()}</th>)
  }
  handleClick (values) {
    console.log(values);
    Index = values;
  }

  renderTableRows = () => {
    let counter=0;
    return this.state.users.map(user => {
      counter++;
      return (
        <tr key={user.index} style={{ borderRadius:"5px"}}>
          <td>{counter}</td>
          <td><Link to={"/index"}><button type="button" className="btn btn-link" onClick={this.handleClick.bind(this, user.index)}>{user.index}</button></Link></td>
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
    const { users,isLoading, isError } = this.state
    if (isLoading) {
      return <div>Loading...</div> 
    }
    if (isError) {
      return <div>Error</div>
    }
    return users.length > 0 ? (
      <> <div className="container-fluid" style={{marginLeft:"auto", marginRight:"auto"}}>
      <h1 className="text-center" style={{paddingTop:"1rem", paddingBottom:"1rem"}}>Sector</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
        <tr style={{ borderRadius:"5px"}}>
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
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table></div></>
    ) : (<div>No stocks</div>)
  }
}

export default TableHead
