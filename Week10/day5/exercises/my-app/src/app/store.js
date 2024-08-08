import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const appReducer = combineReducers({
  postsReducer,
  usersReducer,
});

export default configureStore({
  reducer: appReducer,
});

// export default store;
