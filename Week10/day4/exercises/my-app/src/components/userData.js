import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers} from '../features/thunk';

const UserData = () => {
    const dispatch = useDispatch();
    const { fetchStore, loading, error } = useSelector((state) => state.manager);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {fetchStore.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserData;
