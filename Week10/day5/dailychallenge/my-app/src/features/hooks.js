import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { tasks,  completed, id } from "./selectors";

export const useSelectTasksByCategory = (category) => {
    return useSelector(
        createSelector(
            [tasks, (state) => category],
            (tasks, selectedCategory) => {
                // If no category is selected or the category is "All", return all tasks
                if (!selectedCategory || selectedCategory === "all") {
                    return tasks;
                }

                return tasks.filter((task) => task.category === selectedCategory);
            }
        )
    );
};

export const useSelectCompletedTasks = () => {
    return useSelector(
        // create selector caches results so it optimises the rendering for the redux script
        createSelector([tasks, completed], (tasks) => {
            return tasks.filter((task) => task.completed);
        })
    );

};

export const useSelectCategoryById = (id) => {
    return useSelector(
        createSelector([tasks, (state) => id], (tasks, getTaskId)=> {
            return tasks.filter((task) => task.id == getTaskId);
        })
    );

};

