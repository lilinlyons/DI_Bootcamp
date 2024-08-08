import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './thunk';

const managerSlice = createSlice({
    name: 'manager',
    initialState: {
        fetchStore: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.fetchStore = action.payload; // Store the fetched data in fetchStore
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default managerSlice.reducer;
