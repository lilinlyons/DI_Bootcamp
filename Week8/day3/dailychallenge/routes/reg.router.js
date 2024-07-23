const {
    registerUser,
    loginUser,
    getOneUser,
    updateUser,
    getAllUsers

} = require("../controllers/reg.controller.js");
const express = require("express");

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers)
router.get("/users/:id", getOneUser)
router.put("/users/:id", updateUser);


module.exports = {
    router
};