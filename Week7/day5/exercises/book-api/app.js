import express from 'express';
import fs from 'fs';

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951
    },
    {
        id: 6,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publishedYear: 1997
    }
];


const app = express();

const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})



app.get('/books/', (req, res) => {
    res.json(books);
});


app.get("/books/:blogID/", (req, res) => {
    const id = Number(req.params.blogID);
    const book = books.find((book) => book.id === id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);


});
