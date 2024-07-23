const {
    getAllTasks,
    getTaskId,
    insertTask,
    updateTask,
    deleteTask

} = require("../controllers/task.controller.js");
const express = require("express");

const router = express.Router();


router.get("/tasks", getAllTasks)
router.get("/tasks/:id", getTaskId)
router.post("/tasks", insertTask)
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)

module.exports = {
    router
};