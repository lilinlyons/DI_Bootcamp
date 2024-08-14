import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("users/userData", async () => {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data;
});

const userDataSlice = createSlice({
    name: "userDataSlice",
    initialState: {
        userInformation: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.userInformation = action.payload.users; // Adjust as needed to match the API response
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.error.message;
            });
    },
});

export default userDataSlice.reducer;
