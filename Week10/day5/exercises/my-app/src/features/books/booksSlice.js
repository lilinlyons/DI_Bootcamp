import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction"
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian"
        }
    ],
    status: "",
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        selectGenre: (state, action) => {
            const { genre } = action.payload;
            state.books = state.books.filter((book) => book.genre === genre);
        },
    },
});

export const { selectGenre } = booksSlice.actions;
export default booksSlice.reducer;
