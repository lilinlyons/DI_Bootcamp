import { useState, useEffect } from "react";

const Example3 = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            setExperiences(data.Experiences);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <>
            <h2>Experiences</h2>
            {experiences.map((item, index) => (
                <div key={index}>
                    <h3>{item.companyName}</h3>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={item.logo}
                            alt={`${item.companyName} Logo`}
                            width="100" // Adjust width as needed
                            style={{ display: "block", marginBottom: "10px" }}
                        />
                    </a>
                    {item.roles.length > 0 ? (
                        <ul>
                            {item.roles.map((role, roleIndex) => (
                                <li key={roleIndex}>
                                    <strong>Title:</strong> {role.title}
                                    <br />
                                    <strong>Description:</strong> {role.description}
                                    <br />
                                    <strong>Start Date:</strong> {role.startDate}
                                    <br />
                                    <strong>End Date:</strong> {role.endDate}
                                    <br />
                                    <strong>Location:</strong> {role.location}
                                    <br />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No roles available.</p>
                    )}
                </div>
            ))}
        </>
    );


};

export default Example3;
