import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import MountainComponent from "./component/mountain";
import FruitComponent from "./component/fruit";
import HomeComponent from "./component/home";
import DisplayPhotos from "./component/displaySearch";
import './App.css';

const NavigationButtons = () => {
    const navigate = useNavigate();

    return (
        <nav className="navigation-buttons">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/mountain')}>Mountain</button>
            <button onClick={() => navigate('/fruit')}>Fruit</button>
        </nav>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            query: '',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form');

        this.setState({ query: this.state.text });

    }

    render() {
        return (
            <div>
                <Router>
                    <div className="search-container">
                        <form onSubmit={this.handleSubmit}>
                            <label>Search: </label><br />
                            <textarea
                                type="text"
                                name="body"
                                value={this.state.text}
                                placeholder="Type your search here..."
                            /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <NavigationButtons />
                    <div style={{ marginTop: '60px' }}>
                        <Routes>
                            <Route exact path="/" element={<HomeComponent />} />
                            <Route exact path="/mountain" element={<MountainComponent />} />
                            <Route exact path="/fruit" element={<FruitComponent />} />
                        </Routes>
                    </div>
                </Router>

                {this.state.query && <DisplayPhotos query={this.state.query} />}
            </div>
        );
    }
}

export default App;
