import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import counterReducer from "../features/ageCounter/ageCounterSlice";

export const appReducer = combineReducers({
    counter: counterReducer
});


const store = configureStore({
    reducer: appReducer
    // middleware: () => [logger, loggerA],
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(logger, loggerA),
});

export default store;