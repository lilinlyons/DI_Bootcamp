import React, {useState, useEffect} from 'react';

const Color = () => {
    const [favouriteColor, setColor] = useState("red");


    useEffect(() => {
            setColor("yellow")
            alert("useEffect reached")
        }
    )
    const changeColor = ()=>{
        setColor("blue")

    }
    return (
        <div>
            <header>My favourite color is <i>{favouriteColor}</i></header>
            <button
                type="button"
                onClick={changeColor}
            > Click Me</button>
        </div>

    )
}

export default Color;
