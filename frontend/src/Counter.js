import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
  	super(props)
  	this.state = {count: props.count}
  	this.handleIncrementClick = this.handleIncrementClick.bind(this);
  	this.handleDecrementClick = this.handleDecrementClick.bind(this)
  }

  handleIncrementClick() {
  	this.setState({count: this.state.count + 1})
  }

  handleDecrementClick() {
  	if (this.state.count > 0) {
  		this.setState({count: this.state.count - 1})
  	}
  }
  
  render() {
    return (
      <div>
      	{this.state.count}
      	<button onClick={this.handleIncrementClick}>
      		+
      	</button>
      	<button onClick={this.handleDecrementClick}>
      		-
      	</button>
      </div>
    )
  }
}

export default Counter
