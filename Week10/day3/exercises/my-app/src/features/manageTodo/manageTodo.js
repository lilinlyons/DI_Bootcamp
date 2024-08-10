import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./manageTodoSlice";
import React, { useState } from 'react';

const ManageTodo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState("");

    const handleAddTodo = () => {
        console.log('Adding Todo:', todoText.trim());
        dispatch(addTodo(todoText.trim()));
        setTodoText("");
    };

    const handleToggleTodo = (id) => {
        console.log('Toggling Todo ID:', id);
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        console.log('Deleting Todo ID:', id);
        dispatch(removeTodo(id));
    };


    return (
        <>
            <div>
                <ul>
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
                </ul>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddTodo();
                        }
                    }}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </>
    );
};

export default ManageTodo;
