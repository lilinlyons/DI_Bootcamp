import { useSelector, useDispatch } from "react-redux";
import logo from '../../logo.svg'



import {
    reset,
    incrementByNum,
    incrementBy2Nums,
    incrementWithPrepare,
    ageDownAsyncThunk,
    ageUpAsyncThunk
} from "./ageCounterSlice";
import { useRef } from "react";

const Counter = (props) => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const loadingStatus = useSelector((state) => state.counter.loadingStatus);
    const numRef = useRef();

    const num1Ref = useRef();
    const num2Ref = useRef();

    const addNum = () => {
        const num = numRef.current.value;
        dispatch(incrementByNum(Number(num)));
    };

    const add2Nums = () => {
        const num1 = num1Ref.current.value;
        const num2 = num2Ref.current.value;
        // dispatch(incrementBy2Nums({ n1: Number(num1), n2: Number(num2) }));
        dispatch(incrementWithPrepare(Number(num1), Number(num2)));
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(ageUpAsyncThunk())}> + </button>
            <button onClick={() => dispatch(ageDownAsyncThunk())}> - </button>
            <button onClick={() => dispatch(reset())}> Reset </button>
            <div>
                <h2>Increment By Number</h2>
                <input ref={numRef} />
                <button onClick={() => addNum()}> Add Number</button>
            </div>
            <div>
                <h2>Increment By 2 Numbers</h2>
                <input ref={num1Ref} />
                <input ref={num2Ref} />
                <button onClick={() => add2Nums()}> Add 2 Numbers</button>
            </div>
            {loadingStatus === "loading" && (  // Changed here
                <div>
                    <p>Loading...</p>
                    <img src={logo} className="App-logo" alt="logo" /> {/* Display the logo */}
                </div>
            )}

        </>
    );
};
export default Counter;
