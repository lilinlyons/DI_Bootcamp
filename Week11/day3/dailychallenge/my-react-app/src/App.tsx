import React from 'react';
import './App.css';
import Todo from "./component/TodoType"
import List from "./component/List"

const App: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, text: 'Walk The Dog' },
    { id: 2, text: 'Speak to boss' },
  ];

  return (
      <div>
        <h1>Todo List</h1>
        <List
            items={todos}
            renderItem={(todo) => (
                <>
                  <strong>{todo.id}:</strong> {todo.text}
                </>
            )}
        />
      </div>
  );
};

export default App;
