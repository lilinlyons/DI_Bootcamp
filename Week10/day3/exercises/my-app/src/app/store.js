import { configureStore } from '@reduxjs/toolkit';
import manageTodoReducer from '../features/manageTodo/manageTodoSlice';

const store = configureStore({
    reducer: {
        todos: manageTodoReducer,
    },
});

export default store;
