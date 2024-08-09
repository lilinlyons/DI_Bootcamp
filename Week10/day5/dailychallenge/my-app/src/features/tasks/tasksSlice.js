import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            taskName: "Walk the dog",
            completed: false,
            category: "Home",
        },
        {
            id: 2,
            taskName: "Meeting at 12 with boss",
            completed: true,
            category: "Work",
        },
    ],
    status: "",
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = action.payload;
            state.tasks.push(newTask);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map((task) =>
                task.id === action.payload.id
                    ? { ...task, taskName: action.payload.text }
                    : task
            );
        },
        // The following category-related reducers should operate on tasks that are categorized
        addCategory: (state, action) => {
            const newCategory = action.payload;
            state.tasks.push(newCategory);
        },
        deleteCategory: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.category !== action.payload);
        },
        editCategory: (state, action) => {
            state.tasks = state.tasks.map((task) =>
                task.category === action.payload.oldCategory
                    ? { ...task, category: action.payload.newCategory }
                    : task
            );
        },
    },
})

export const {
    // addTask,
    // deleteTask,
    // editTask,
    // addCategory,
    // deleteCategory,
    // editCategory,
} = tasksSlice.actions;
export default tasksSlice.reducer;