const {
    _registerUser,
    _login,
    _getAllUsers,
    _getOneUser,
    _updateUser
} = require("../models/reg.models");


const registerUser = (req, res) => {
    const { username, password } = req.body;
    _registerUser(username, password)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error entering username and password" });
        });
};

const loginUser = (req, res) => {
    const { username, password } = req.body;
    _login(username, password)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error entering username and password" });
        });
};

const getAllUsers = (req, res) => {
    _getAllUsers()
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error entering username and password" });
        });
};

const getOneUser = (req, res) => {
    const {id} = req.params
    _getOneUser(id)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error entering username and password" });
        });
};

const updateUser = (req, res) => {
    const {id} = req.params
    const {username, password} = req.body
    _updateUser(id, username, password)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Error entering username and password" });
        });
};


module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getOneUser,
    updateUser

}