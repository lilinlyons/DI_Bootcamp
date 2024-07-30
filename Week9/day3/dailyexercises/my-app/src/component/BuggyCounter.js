import React from 'react';


class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleChange = () => {
        this.setState((prevState) => {
            if (prevState.counter >= 5) {
                throw new Error('I crashed!');
            }
            return { counter: prevState.counter + 1 };
        });
    };

    render() {
        return (
            <div className="box">
                <div>{this.state.counter}</div>
                <button type="button" onClick={this.handleChange}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default BuggyCounter;
