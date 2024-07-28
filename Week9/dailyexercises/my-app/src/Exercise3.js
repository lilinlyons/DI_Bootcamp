import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={style_header}>
                    Welcome to Exercise Component
                </h1>
                <p className="para">This is a paragraph in the Exercise component.</p>
                <a href="https://github.com/lilinlyons" target="_blank" rel="noopener noreferrer">
                    Visit My Github
                </a>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <img src="../public/logo192.png" alt="Placeholder" />
            </div>
        );
    }
}

export default Exercise;
