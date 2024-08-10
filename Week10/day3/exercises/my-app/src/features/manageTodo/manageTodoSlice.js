import { createSlice } from '@reduxjs/toolkit';

const manageTodoSlice = createSlice({
    name: 'todos',
    initialState: [],  // Initial state as an empty array
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = manageTodoSlice.actions;
export default manageTodoSlice.reducer;
