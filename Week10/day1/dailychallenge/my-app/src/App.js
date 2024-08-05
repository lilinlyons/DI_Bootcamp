import React, { useReducer, useState } from "react";
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
