import { useState, useEffect } from "react";
import quotes from "./QuotesDatabase";

const QuoteFetcher = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [lastIndex, setLastIndex] = useState(null);

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = () => {
        let randomIndex;

        // Ensure the new index is different from the last index
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === lastIndex);

        const randomQuote = quotes[randomIndex];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        setLastIndex(randomIndex);
    };

    return (
        <>
            <h2>Random Quote Generator</h2>
            <p>{quote}</p>
            <p>{author}</p>
            <button
                type="button"
                onClick={() => fetchRandomQuote()}
            >
                Click for Random Quote!
            </button>
        </>
    );
};

export default QuoteFetcher;
