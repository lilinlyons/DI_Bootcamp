import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/manageData/manageDataSlice"
import emojiReducer from "../features/emojis/emojiSlice";


export const appReducer = combineReducers({
    postReducer,
    emojiReducer,
});

export default configureStore({
    reducer: appReducer,
});
