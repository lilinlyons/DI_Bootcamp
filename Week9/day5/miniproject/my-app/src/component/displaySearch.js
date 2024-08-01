import React, { useState, useEffect } from 'react';
import getPhotos from "./getPhotos";

const DisplayPhotos = ({ query }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);

            try {
                const data = await getPhotos(query);
                setPhotos(data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [query]);

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {photos.map((photo, index) => (
                <div key={index}>
                    <h3>{photo.alt_description }</h3>
                    <img
                        src={photo.urls.small}
                        alt={`${photo.user.name}'s photo`}
                        style={{ display: "block", marginBottom: "10px", width: '20vw' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default DisplayPhotos;
