import React, {useReducer} from "react";

function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const handleAddTodo = (text) => {
        dispatch({ type: "ADD_TODO", payload: text });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    return (
        <div>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}

            <input
                type="text"
                placeholder="Add a new todo"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAddTodo(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
        </div>
    );
}


export default TodoList