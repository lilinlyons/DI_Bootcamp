import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment} from '../features/emojis/emojiSlice';

const Emojis = () => {
    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
    };

    const dispatch = useDispatch();
    const { fetchStore, loading, error } = useSelector((state) => state.manager);
    console.log(fetchStore)
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Emojis</h1>
            <ul>
                {fetchStore.map((data) => (
                    <li key={data.id}>
                        <h2 >
                            {data.title}
                        </h2>
                        <p >
                            {data.body}
                        </p>
                        <p>{reactionEmoji}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserData;
