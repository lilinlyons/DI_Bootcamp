import React, {useState} from 'react';

const Phone = () => {
    const [brand] = useState("Samsung");
    const [model] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year] = useState(2020);

    const changeColor = ()=>{
        setColor("blue")

    }
    return (
        <div>
            <h1>My Phone is a {brand}</h1>
            <div>It is a {color} {model} from the year {year}</div>

            <button
                type="button"
                onClick={changeColor}
            > Click Me</button>
        </div>

    )
}

export default Phone;
