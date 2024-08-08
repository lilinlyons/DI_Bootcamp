import { createAsyncThunk} from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk("data/fetch", async (_, { dispatch }) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await result.json();
    console.log(data)
    return data
});

