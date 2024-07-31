import React, { useState, useEffect } from 'react';
const cors = require("cors");

function App() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  // Define the async function to fetch and send data
  const fetchData = async () => {
    const url = 'https://webhook.site/02eefa43-9f6d-4d8d-a2bc-8878cadf288e';

    const postData = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
          'Accept': 'application/json' // Expecting JSON response
        },
        body: JSON.stringify(postData) // Convert JavaScript object to JSON string
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse JSON response
      const data = await response.json();
      setResponseData(data);

    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="App">

        {responseData ? (
            <div>
              <h2>Response Data:</h2>
              <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
}

export default App;
