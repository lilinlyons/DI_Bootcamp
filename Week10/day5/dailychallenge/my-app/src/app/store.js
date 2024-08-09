import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice"


export const appReducer = combineReducers({
  tasksReducer
});

export default configureStore({
  reducer: appReducer,
});

