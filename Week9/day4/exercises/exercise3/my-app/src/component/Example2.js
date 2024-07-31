import { useState, useEffect } from "react";

const Example2 = () => {
    const [skills, setSkills] = useState([]);

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
            console.log(data);
            setSkills(data.Skills);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <>
            <h2>Skills</h2>
            {skills.map((item, index) => (
                <div key={index}>
                    <h3>{item.Area}</h3>
                    <ul>
                        {item.SkillSet.map((skill, skillIndex) => (
                            <li key={skillIndex}>
                                {skill.Name} {skill.Hot ? "(Hot)" : ""}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );

};

export default Example2;
