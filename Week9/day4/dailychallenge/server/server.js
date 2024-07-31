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
        } catch (error) {
            console.error('Fetch error:', error);
            this.setState({ message: 'Error fetching data' });
        }
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/hello', { // Corrected URL to /api/hello
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input: this.state.inputValue })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            this.setState({ message: data });
        } catch (error) {
            console.error('Fetch error:', error);
            this.setState({ message: 'Error submitting data' });
        }
    };

    render() {
        return (
            <div>

                    <h1>{this.state.message}</h1>

                <h1>Submit Input</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Answer: </label><br />
                    <textarea
                        type="text"
                        name="body"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    /><br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default App;
