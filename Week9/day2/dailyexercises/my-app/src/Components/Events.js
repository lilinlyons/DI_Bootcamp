import React, {useState} from 'react';

const ClickMe = () => {
    const [isToggleOn, setToggle] = useState(false);

    const alerted = () => {
        alert("I was clicked!");
    }


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter key was pressed with text: ${event.target.value}`);
        }
        console.log(`Key pressed: ${event.key}`);
    }

    return (
        <div>
            <button onClick={() => setToggle(!isToggleOn)}>
                {isToggleOn? "on" : "off"}
            </button>


            <button
                type="button"
                onClick={alerted}
            > Click Me</button>

            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Type something"
            />
        </div>
    );
}

export default ClickMe;
