import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts} from '../features/manageData/thunk';

const UserData = () => {

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
            <h1>The Posts Project</h1>
            <ul>
                {fetchStore.map((data) => (
                    <li key={data.id}>
                        <h2 >
                            {data.title}
                        </h2>
                        <p >
                            {data.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserData;
