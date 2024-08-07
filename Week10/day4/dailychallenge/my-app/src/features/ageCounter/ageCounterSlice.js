import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    status: "idle",
};

export const ageUpAsyncThunk = createAsyncThunk("counter/delayup", async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1);  // Return the increment value, e.g., 1
        }, 1000);
    });
});

export const ageDownAsyncThunk = createAsyncThunk("counter/delaydown", async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1);  // Return the decrement value, e.g., 1
        }, 1000);
    });
});


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        reset: (state) => {
            state.count = 0;
        },
        incrementByNum: (state, action) => {
            console.log(action);
            state.count += action.payload;
        },
        incrementBy2Nums: (state, action) => {
            console.log(action);
            state.count += action.payload.n1 + action.payload.n2;
        },
        incrementWithPrepare: {
            reducer(state, action) {
                state.count += action.payload;
            },
            prepare(num1, num2) {
                return { payload: num1 + num2 };
            },
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsyncThunk.pending, (state) => {
                state.status = "loading";
                console.log("Loading (increment):", state.status);
            })
            .addCase(ageUpAsyncThunk.fulfilled, (state, action) => {
                state.count += action.payload;
                state.status = "idle";  // Reset status after completion
                console.log("Completed (increment):", state.status);
            })
            .addCase(ageUpAsyncThunk.rejected, (state, action) => {
                console.log("Error (increment):", action.error.message);
                state.status = "failed";
                state.count -= Number(action.error.message);
            })
            .addCase(ageDownAsyncThunk.pending, (state) => {
                state.status = "loading";
                console.log("Loading (decrement):", state.status);
            })
            .addCase(ageDownAsyncThunk.fulfilled, (state, action) => {
                state.count -= action.payload;
                state.status = "idle";
                console.log("Completed (decrement):", state.status);
            })
            .addCase(ageDownAsyncThunk.rejected, (state, action) => {
                console.log("Error (decrement):", action.error.message);
                state.status = "failed";
                state.count += Number(action.error.message);
            });
    }
});

export const {
    increment,
    decrement,
    reset,
    incrementByNum,
    incrementBy2Nums,
    incrementWithPrepare,
} = counterSlice.actions;


export default counterSlice.reducer;
