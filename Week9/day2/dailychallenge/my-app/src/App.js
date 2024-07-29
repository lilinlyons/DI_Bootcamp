
import './App.css';
import React, {useState} from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

    const addValue = (index) => {
        setLanguages(prevLanguages => {
            console.log([...prevLanguages])
            const newLanguages = [...prevLanguages];
            newLanguages[index].votes += 1;
            return newLanguages;
        });
    };

    return (
        <div className="container">
            <div className="row noMargin" style={{ backgroundColor: "yellow" }}>
                {languages.map((language, index) => (
                    <div key={index} className={`col ${language.name.toLowerCase()}`}>
                        {language.name}
                        <button
                            type="button"
                            onClick={() => addValue(index)}
                        >
                            Click Me
                        </button>
                        <p>Votes: {language.votes}</p> {/* Display votes */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;