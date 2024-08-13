import React, { useState } from 'react';
import addTodo from "./AddTodo";
import Todo from "./TodoType";

type ListProps = {
    items: Todo[];
    renderItem: (item: Todo) => React.ReactNode;
};

const List: React.FC<ListProps> = ({ items, renderItem }) => {
    const [todoItems, setTodoItems] = useState<Todo[]>(items);

    const handleAddTodo = () => {
        const updatedItems = addTodo(todoItems);
        setTodoItems(updatedItems);
    };

    return (
        <div>
            <ul>
                {todoItems.map((item) => (
                    <li key={item.id}>{renderItem(item)}</li>
                ))}
            </ul>
            <button onClick={handleAddTodo}>Add Todo with DateTime</button>
        </div>
    );
};

export default List;
