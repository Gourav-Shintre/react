import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevprops,prevstate){
        if(prevprops.number !== this.props.number){
            console.log("comonent updated");
        }

    }

  render() {
    return (
        <>
     
      <h1>{this.props.number}</h1>
      </>
    )
  }
}
