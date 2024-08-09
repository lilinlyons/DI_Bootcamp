import React, { useState } from "react";
import {
    useSelectTasksByCategory,
    useSelectCompletedTasks,
    useSelectCategoryById
} from "./hooks";
import CategoryButton from "./CategoryButton";

const TaskList = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);
    const [getTaskId, setTaskId] = useState(""); // Store Task ID from input

    const tasksByCategory = useSelectTasksByCategory(selectedCategory);
    const completedTasks = useSelectCompletedTasks();

    // Assume useSelectCategoryById returns a function to get task by ID
    const getTaskById = useSelectCategoryById(getTaskId);

    // Determine which tasks to display
    let tasksToDisplay = showCompletedOnly ? completedTasks : tasksByCategory;

    // If a specific Task ID is provided, find the task
    if (getTaskId) {
        tasksToDisplay = getTaskById
    }

    // Render the tasks
    const renderTasks = tasksToDisplay.map((task) => (
        <article key={task.id}>
            <h3>{task.taskName}</h3>
            <p>{task.completed ? "Completed" : "Not Completed"}</p>
            <p>{task.category}</p>
        </article>
    ));

    return (
        <>
            <h2>Tasks</h2>
            <CategoryButton tasks={useSelectTasksByCategory("all")} setSelectedCategory={setSelectedCategory} />
            <label>
                <input
                    type="checkbox"
                    checked={showCompletedOnly}
                    onChange={(e) => setShowCompletedOnly(e.target.checked)}
                />
                Show Completed Only
            </label>
            <label>
                <input
                    type="text"
                    value={getTaskId}
                    onChange={(e) => setTaskId(e.target.value)}
                    placeholder="Enter Task ID"
                />
                Enter Task ID
            </label>
            <section>{renderTasks}</section>
        </>
    );
};

export default TaskList;
