import TodoList from "./todo.js";

const todoList = new TodoList();

todoList.addTask('Complete assignment');
todoList.addTask('Buy groceries');

todoList.completeTask(1)

todoList.listTasks()