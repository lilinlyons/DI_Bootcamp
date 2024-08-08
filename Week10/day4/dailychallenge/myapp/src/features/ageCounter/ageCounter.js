import { useSelector, useDispatch } from "react-redux";


import {
    ageDownAsyncThunk,
    ageUpAsyncThunk
} from "./ageCounterSlice";
import { useRef } from "react";

const Counter = (props) => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const numRef = useRef();

    const addNum = () => {
        const num = numRef.current.value;
        dispatch(ageUpAsyncThunk(Number(num)));
    };

    // const add2Nums = () => {
    //     const num1 = num1Ref.current.value;
    //     const num2 = num2Ref.current.value;
    //     // dispatch(incrementBy2Nums({ n1: Number(num1), n2: Number(num2) }));
    //     dispatch(incrementWithPrepare(Number(num1), Number(num2)));
    // };

    return (
        <>
            <h2>Count: {count}</h2>
            <div>
                <h2>Increment By Number with Delay</h2>
                <input ref={numRef} />
                <button onClick={() => addNum()}> Add Number</button>
            </div>
        </>
    );
};
export default Counter;
