import React, {useEffect, useState} from "react";


interface Post {
    id: number;
    title: string;
    body: string;
}

const FetchData: React.FC  = () => {
    const [postData, setPostData] = useState<Post[] | null>(null);

    useEffect(() => {
        all();
    }, []);

    const all = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPostData(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2>My Shop</h2>
            <h2>Add Product</h2>
            {postData ? (
                postData.map((post) => (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </article>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};
export default FetchData;
