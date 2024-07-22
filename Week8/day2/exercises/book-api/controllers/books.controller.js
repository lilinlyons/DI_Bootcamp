const {
    _getAllBooks,
    _getOneBook,
    _insertBook
} = require("../models/books.model");

const getAllBooks = (req, res) => {
    _getAllBooks()
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "All books can't be returned" });
        });
};

const getOneBook = (req, res) => {
    const {id} = req.params
    _getOneBook(id)
        .then((result) => {
            res.json(result);
        })
        .catch((e) => {
            res.status(404).json({ message: "Book not found" });
        });
};


const insertBook = (req, res) => {
    const { title, author, publishedyear } = req.body;
    _insertBook(title, author, publishedyear)
        .then((result) => {
            // res.json(result)
            getAllBooks(req,res)
        })
        .catch((e) => {
            res.status(404).json({ message: "something went wrong!!!" });
        });
};




module.exports = {
    getAllBooks,
    getOneBook,
    insertBook
};