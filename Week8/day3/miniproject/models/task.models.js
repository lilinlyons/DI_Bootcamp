const json = require("json")
const path = require('path');
const {tasksPath} = require("../config/config");

const fs = require('fs').promises;


const _getAllTasks = async () => {
    try {
        const data = await fs.readFile(tasksPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('File not found:', err);
        } else if (err.name === 'SyntaxError') {
            console.error('Error parsing JSON:', err);
        } else {
            console.error('Error reading file:', err);
        }
        throw err;
    }
};

const _getTaskId = async (taskId) => {
    try {
        const tasks = await _getAllTasks();
        const task = tasks.find(t => t.id == taskId);
        return task;
    } catch (err) {
        console.error('Error finding task:', err);
        throw err;
    }
};

const _insertTask = async (taskName) => {
    try {
        const tasks = await _getAllTasks();
        const newTask = { id: tasks.length + 1, taskName }

        tasks.push(newTask);

        const updatedData = JSON.stringify(tasks, null, 2);

        await fs.writeFile(tasksPath, updatedData, 'utf8');

        return console.log('Task added successfully!');
    } catch (err) {
        console.error('Error inserting task:', err);
        throw err;
    }
}


const _updateTask = async (taskId, taskName) => {
    try {
        const tasks = await _getAllTasks();

        const taskIndex = tasks.findIndex(t => t.id == taskId);

        if (taskIndex === -1) {
            console.error('Task not found');
            return;
        }

        tasks[taskIndex].taskName = taskName;

        const updatedData = JSON.stringify(tasks, null, 2);

        await fs.writeFile(tasksPath, updatedData, 'utf8');

        console.log('Task updated successfully!');
    } catch (err) {
        console.error('Error updating task:', err);
        throw err;
    }
}

const _deleteTask = async (taskId) => {
    try {
        const tasks = await _getAllTasks();

        const taskIndex = tasks.findIndex(t => t.id == taskId);

        if (taskIndex === -1) {
            console.error('Task not found');
            return;
        }

        tasks.splice(taskIndex, 1);

        const updatedData = JSON.stringify(tasks, null, 2);

        await fs.writeFile(tasksPath, updatedData, 'utf8');

        console.log('Task deleted successfully!');
    } catch (err) {
        console.error('Error updating task:', err);
        throw err;
    }
}


module.exports = {
    _getAllTasks,
    _getTaskId,
    _insertTask,
    _updateTask,
    _deleteTask
}
