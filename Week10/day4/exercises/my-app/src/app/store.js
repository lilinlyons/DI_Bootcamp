import { configureStore } from "@reduxjs/toolkit";
import manageDataSlice from "../features/manageData/manageDataSlice"

const store = configureStore({
    reducer: {
        manager: manageDataSlice
    },
});

export default store;

