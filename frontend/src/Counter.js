import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
  	super(props)
  	this.state = {count: 0}
  }
  
  render() {
    return (
      <div>
      	{this.state.count}
      </div>
    )
  }
}

export default Counter
