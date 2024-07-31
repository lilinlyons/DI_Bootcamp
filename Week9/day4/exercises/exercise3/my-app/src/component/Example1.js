import { useState, useEffect } from "react";

const Example1 = () => {
    const [socialMedias, setSocialMedias] = useState([]);

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
            setSocialMedias(data.SocialMedias);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <>
            <h2>Social Media</h2>

                <ul>
                    {socialMedias.map((item, index) => (
                        <li key={index}>
                            <a href={item} target="_blank" rel="noopener noreferrer">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>


        </>
    );
};

export default Example1;
