import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      greetings: ''
    }
  }

  componentDidMount() {
    fetch('http://34.226.197.35/api')
    .then((resp) => {
      resp.json()
      .then((data) => {
        this.setState({
          greetings: data.greetings
        })
      })
    })
  }

  render() {
    return (
      <div style={{height: '100px', width: '100%' }} id="hi">{this.state.greetings}</div>
    )
  }
}

export default App
