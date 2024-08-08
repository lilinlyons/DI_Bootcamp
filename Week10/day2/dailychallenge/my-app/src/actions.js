export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODO = 'FILTER_TODO';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = (index) => ({
    type: REMOVE_TODO,
    payload: index
});

export const editTodo = (index, newTodo) => ({
    type: EDIT_TODO,
    payload: { index, newTodo }
});


export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index
});


export const filterTodo = (status) => ({
    type: FILTER_TODO,
    payload: status
});
