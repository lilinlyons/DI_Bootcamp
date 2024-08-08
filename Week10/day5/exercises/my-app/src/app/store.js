import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "../features/books/booksSlice"


export const appReducer = combineReducers({
  bookReducer
});

export default configureStore({
  reducer: appReducer,
});

