import React, { Component } from 'react'
import Instructions from './Instructions'
import Show from './Show'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      shows: [
        {id: 1, name: "Game of Thrones", episodes_seen: 0},
        {id: 2, name: "Naruto", episodes_seen: 220},
        {id: 3, name: "Black Mirror", episodes_seen: 3},
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  handleSubmitClick() {
    this.setState({
      inputValue: '',
      shows: this.state.shows.concat({
        id: this.state.shows[this.state.shows.length - 1].id + 1,
        name: this.state.inputValue,
        episodes_seen: 0
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Instructions complete={true}/>
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}

        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmitClick}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App
