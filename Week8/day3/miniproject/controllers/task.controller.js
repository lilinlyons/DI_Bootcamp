const {

    _getAllTasks,
    _getTaskId,
    _insertTask,
    _updateTask,
    _deleteTask

} = require("../models/task.models");



const getAllTasks = (req, res) =>{
    _getAllTasks()
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error returning all tasks" });
        });

}


const getTaskId = (req, res) => {
    const { id } = req.params;
    _getTaskId(id)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error entering username and password" });
        });
};

const insertTask = (req, res) => {
    const { taskName } = req.body;
    _insertTask(taskName)
        .then((result) => {
            getAllTasks(req,res)
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};



const updateTask = (req, res) => {
    const { id } = req.params
    const {taskName} = req.body
    _updateTask(id, taskName)
        .then((result) => {
            getAllTasks(req,res)
        })
        .catch((e) => {
            res.status(404).json({ message: "The update failed" });
        });
};


const deleteTask = (req, res) => {
    const { id } = req.params
    _deleteTask(id)
        .then((result) => {
            getAllTasks(req,res)
        })
        .catch((e) => {
            res.status(404).json({ message: "The update failed" });
        });
};


module.exports = {
    getAllTasks,
    getTaskId,
    insertTask,
    updateTask,
    deleteTask

}