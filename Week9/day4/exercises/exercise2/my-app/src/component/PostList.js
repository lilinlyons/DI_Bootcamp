import { useState, useEffect } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('./data.json');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2>Posts</h2>
            {posts.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <h2>{item.content}</h2>
                    <h2>{item.date}</h2>
                </div>
            ))}
        </>
    );
};

export default PostList;
