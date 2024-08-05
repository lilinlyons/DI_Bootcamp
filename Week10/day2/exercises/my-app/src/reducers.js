
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO, FILTER_TODO } from './actions';
import initialState from './initialState';

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.index ? action.payload.newTodo : todo
                )
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case FILTER_TODO:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

export default todoReducer;
