import {fetchFailure, fetchStart, fetchSuccess} from "./manageData/manageDataSlice";
import { createAsyncThunk} from "@reduxjs/toolkit"


export const fetchUsers = createAsyncThunk("data/fetch", async (_, { dispatch }) => {
    dispatch(fetchStart());
    try {
        const result = await fetch(`https://api.example.com/data`);
        const data = await result.json();
        dispatch(fetchSuccess(data));
    } catch (error) {
        dispatch(fetchFailure(error.message)
        );
    }
});
