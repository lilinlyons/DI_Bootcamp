import React, { useState, useEffect } from "react";
import getPhotos from "./getPhotos";

const FruitComponent = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            console.log("Working ...");

            try {
                const data = await getPhotos('Fruit');
                console.log(data);
                setPhotos(data);
            } catch (error) {
                console.log(`We got the error: ${error}`);
            }
            console.log("Work Done ...");
        };

        fetchPhotos();
    }, []);

    return (
        <div className="container">
            {photos.map((photo, index) => (
                <div key={index}>
                    <h3>{photo.alt_description}</h3>
                    {/*<a href={photo.links.html} target="_blank" rel="noopener noreferrer">*/}
                    <img
                        src={photo.urls.small}
                        alt={`${photo.user.name}'s photo`}
                        style={{ display: "block", marginBottom: "10px" }}
                    />
                    {/*</a>*/}
                </div>
            ))}
        </div>
    );
};

export default FruitComponent;
