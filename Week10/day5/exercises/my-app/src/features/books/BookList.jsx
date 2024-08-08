import React, { useState } from "react";
import {
    useSelectBooks,
    useSelectFictionBooks,
    useSelectDystopianBooks
} from "./hooks"; // Import your hooks here
import GenreButton from "./GenreButton";

const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState("all");

    const allBooks = useSelectBooks(); // Hook for all books
    const fictionBooks = useSelectFictionBooks(); // Hook for fiction books
    const dystopianBooks = useSelectDystopianBooks(); // Hook for dystopian books

    let books;
    switch (selectedGenre) {
        case "Fiction":
            books = fictionBooks; // Set to fiction books
            break;
        case "Dystopian":
            books = dystopianBooks; // Set to dystopian books
            break;
        default:
            books = allBooks; // Set to all books
            break;
    }

    const renderBooks = books.map((book) => (
        <article key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.genre}</p>
        </article>
    ));

    return (
        <>
            <h2>Books</h2>
            <GenreButton books={allBooks} setSelectedGenre={setSelectedGenre} />
            <section>{renderBooks}</section>
        </>
    );
};

export default BookList;
