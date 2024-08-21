import React, { Component } from 'react'
import Counter1 from './component/Counter1';
export default class App extends Component {
  
  constructor(){
    super();
    this.state={count:0}
  }

  componentDidMount(){
    console.log("componentDidMount: When component render first time");
  }
  increment(){
    this.setState({count:this.state.count+1})
  }
  componentWillUnmount(){
    console.log(" componentWillUnmount:Component removed");
  }
  render() {
    return (
      <>
      <div>React Lifecycle Methods</div>
      <Counter1 number={this.state.count}/>
     
      <button onClick={()=>{this.increment()}}>Click me</button>
      </>
    )
  }
}
