import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3001/api/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      this.setState({ message: data });
      console.log(this.state.message)
    } catch (error) {
      console.error('Fetch error:', error);
      this.setState({ message: 'Error fetching data' });
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Submitting form')
    fetch('http://localhost:3001/api/hello', {
      method: 'POST',
      body: this.state.text
    }).then(function(response) {
      console.log(response)
      return response.json()
    })
    console.log('Form submitted.')
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>{this.state.message}</h1>
          </header>
          <h1>Submit Input</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Answer: </label><br/>
            <textarea type="text" name="body" onChange={(e) => this.setState({ text: e.target.value })}/><br/>
            <input type="submit"/>
          </form>

        </div>
    );
  }
}

export default App