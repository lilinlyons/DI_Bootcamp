import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      sum: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form');

    const { firstNumber, secondNumber } = this.state;
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);

    this.setState({ sum });
  }

  render() {
    return (
        <div>
          <Router>
            <div className="search-container">
              <form onSubmit={this.handleSubmit}>
                <label>Enter first number: </label><br />
                <input
                    type="text"
                    name="firstNumber"
                    value={this.state.firstNumber}
                    onChange={this.handleChange}
                    placeholder="Number"
                /><br />
                <label>Enter second number: </label><br />
                <input
                    type="text"
                    name="secondNumber"
                    value={this.state.secondNumber}
                    onChange={this.handleChange}
                    placeholder="Number"
                /><br />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div style={{ marginTop: '60px' }}>
              <Routes>
              </Routes>
            </div>
          </Router>

          {this.state.sum !== null && (
              <div>
                <h3>Sum: {this.state.sum}</h3>
              </div>
          )}
        </div>
    );
  }
}

export default App;
