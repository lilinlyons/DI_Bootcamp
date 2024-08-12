// src/components/EditTodo.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, editTodo, toggleTodo, filterTodo } from '../actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker

const TodoList = () => {
    const { todos, filter } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState('');

    const handleAddTodo = () => {
        if (todo.trim()) {
            dispatch(addTodo({
                text: todo,
                completed: false,
                date: startDate
            }));
            setTodo('');
        }
    };

    const handleEditTodo = (index) => {
        setEditingIndex(index);
        setEditingText(todos[index].text);
    };

    const handleSaveEdit = (index) => {
        if (editingText.trim()) {
            dispatch(editTodo(index, { text: editingText, completed: todos[index].completed, date: todos[index].date }));
            setEditingIndex(null);
            setEditingText('');
        }
    };

    const handleToggleTodo = (index) => {
        dispatch(toggleTodo(index));
    };

    const handleFilterTodo = (status) => {
        dispatch(filterTodo(status));
    };

    const dateFilterTodos = todos.filter(todo => {
        return (
            todo.date.toDateString() === startDate.toDateString()
        );
    });


    const filteredTodos = dateFilterTodos.filter(todo => {
        if (filter === 'completed') {
            return todo.completed;
        }
        if (filter === 'incomplete') {
            return !todo.completed;
        }
        return true;
    });

    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {filteredTodos.map((todo, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <div>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(index)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                {todo.text}
                                <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
                                <button onClick={() => handleEditTodo(index)}>Edit</button>
                                <button onClick={() => handleToggleTodo(index)}>
                                    {todo.completed ? 'Incomplete' : 'Complete'}
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => handleFilterTodo('all')}>All</button>
                <button onClick={() => handleFilterTodo('completed')}>Completed</button>
                <button onClick={() => handleFilterTodo('incomplete')}>Incomplete</button>
            </div>
        </div>
    );
};

export default TodoList;
