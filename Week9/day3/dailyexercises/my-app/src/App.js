import React, {useState} from 'react';
import BuggyCounter from './component/BuggyCounter';
import ErrorBoundary from './component/ErrorBoundaries';
import './App.css';
import Color from "./component/Color";
import Child from "./component/Child";

function App() {
    const [showChild, setShowChild] = useState(true);
    return (
        <div className="App">
            <h1>Counter 1</h1>
            <ErrorBoundary >
                <BuggyCounter />
            </ErrorBoundary>

            <h1>Counter 2</h1>
            <ErrorBoundary >
                <BuggyCounter />
            </ErrorBoundary>


            <Color>

            </Color>
            {showChild && <Child />}

            <button onClick={() => setShowChild(!showChild)}>
                Delete
            </button>


        </div>
    );
}

export default App;
