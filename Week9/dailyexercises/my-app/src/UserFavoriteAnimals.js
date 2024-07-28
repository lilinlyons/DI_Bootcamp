import React from 'react';


function UserFavoriteAnimals({ items }) {
    return (
        <div>
            <h2>Frameworks</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item} the key is {index}</li>
                ))}
            </ul>
        </div>
    );
}



export default UserFavoriteAnimals;