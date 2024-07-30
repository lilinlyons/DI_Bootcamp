import React, { Component } from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    componentWillUnmount() {
        alert("Component Header is about to unmount")
    }

    render() {
        if (this.state.show) {
            return (
                <div>
                    <header>Hello World!</header>
                </div>
            );
        }

    }
}

export default Child;
