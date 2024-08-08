import React from "react";

const GenreDropdown = ({ books, setSelectedGenre }) => {
    const genres = [...new Set(books.map(book => book.genre))];

    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value="all">All Genres</option>
            {genres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
    );
};

export default GenreDropdown;
