const {
    _getAllPosts,
    _getOnePost,
    _insertPost,
    _updatePost,
    _deletePost
} = require("../models/posts.model");

const getAllPosts = (req, res) => {
    _getAllPosts()
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};

const getOnePost = (req, res) => {
    const { id } = req.params;
    _getOnePost(id)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};

const insertPost = (req, res) => {
    const { title, content } = req.body;
    _insertPost(title, content)
        .then((result) => {
            // res.json(result);
            getAllPosts(req,res)
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};


const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    _updatePost(id, title, content)
        .then((result) => {
            res.json(result)
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};


const deletePost = (req, res) => {
    const { id } = req.params;
    _deletePost(id)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};

module.exports = {
    getAllPosts,
    getOnePost,
    insertPost,
    updatePost,
    deletePost
};
