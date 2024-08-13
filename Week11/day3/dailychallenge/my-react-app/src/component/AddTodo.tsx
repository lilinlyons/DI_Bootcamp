import Todo from "./TodoType";

function addTodo(items: Todo[]): Todo[] {
    const newItem: Todo = { id: items.length + 1, text: new Date().toLocaleString() };
    return [...items, newItem];
}

export default addTodo;
