import React, { useReducer, useState } from "react";
import "./App.css";  // Ensure this file exists or remove this line if not needed
import TodoList from "./component/EditTodo"


function App() {
  return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList/>
      </div>
  );
}

export default App;
