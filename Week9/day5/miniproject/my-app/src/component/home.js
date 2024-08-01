import React, { useState, useEffect } from "react";
import getPhotos from "./getPhotos";

const HomeComponent = () => {
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

                    <img
                        src={photo.urls.small}
                        alt={`${photo.user.name}'s photo`}
                        style={{ display: "block", marginBottom: "10px" }}
                    />

                </div>
            ))}
        </div>
    );
};

export default HomeComponent;
