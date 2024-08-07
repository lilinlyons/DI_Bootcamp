import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchStore: [],
    loading: false,
    error: null,
};

export const manageDataSlice = createSlice({
    name: "manageDataSlice",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.fetchStore = action.payload;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchStart, fetchSuccess, fetchFailure } = manageDataSlice.actions;

export default manageDataSlice.reducer;
