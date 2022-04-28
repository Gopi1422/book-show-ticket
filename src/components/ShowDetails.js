import React, { Component } from 'react'

export class ShowDetails extends Component {
  render() {
    let {show} = this.props;
    return (
        <div className='my-4'>
        <h1 className='text-center' style={{margin: "35px 0px", marginTop: "90px"}}>Show Details {show}</h1>
        </div>
    )
  }
}

export default ShowDetails
