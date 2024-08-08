import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    status: "idle",
};


export const emojicounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },

    },
});

export const {
    increment,
    decrement,

} = emojicounterSlice.actions;

export default emojicounterSlice.reducer;
