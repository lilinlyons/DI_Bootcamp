import React, { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "EDIT_TODO":
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        case "FILTER_TODO":
            return state.filter((todo) => todo.completed === false);
        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState("");
    const [editId, setEditId] = useState(null);

    const handleAddTodo = (text) => {
        dispatch({ type: "ADD_TODO", payload: text });
        setTodoText("");
    };

    const handleEditTodo = (id, text) => {
        dispatch({ type: "EDIT_TODO", payload: { id, text } });
        setTodoText("");
        setEditId(null);
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const handleFilterTodo = (id) => {
        dispatch({ type: "FILTER_TODO", payload: id });
    };


    const startEdit = (id, text) => {
        setEditId(id);
        setTodoText(text);
    };

    return (
        <div>
            <ul>
                <button onClick={() => handleFilterTodo(todos)}>Filter Incomplete Items</button>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder={editId ? "Edit todo" : "Add a new todo"}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (editId) {
                            handleEditTodo(editId, todoText);
                        } else {
                            handleAddTodo(todoText);
                        }
                        e.target.value = "";
                    }
                }}
            />
        </div>
    );
}

export default TodoList;
