import React, { useState } from 'react';
import Garage from "./Garage";

function Car(props) {
    const [color] = useState("red");

    return (
        <div>
            <header>This car is a {color} {props.model}</header>
            <div>Who lives in my <Garage size="small"/> Garage?</div>
        </div>
    );
}

export default Car;
