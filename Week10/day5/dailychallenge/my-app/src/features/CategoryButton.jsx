import React from "react";

const CategoryDropdown = ({ tasks, setSelectedCategory }) => {
    const categories = [...new Set(tasks.map(task => task.category))];

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryDropdown;
