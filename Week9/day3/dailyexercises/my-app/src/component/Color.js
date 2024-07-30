import React, { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "red",
        };
    }

    changeColor = () => {
        this.setState({ favouriteColor: "blue" });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {
        this.timerID = setTimeout(() => {
            this.setState({ favouriteColor: "yellow" });
        }, 2000);
        console.log("after update")
    }


    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
        return null
    }

    render() {
        return (
            <div>
                <header>My favourite color is <i>{this.state.favouriteColor}</i></header>
                <button type="button" onClick={this.changeColor}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default Color;
