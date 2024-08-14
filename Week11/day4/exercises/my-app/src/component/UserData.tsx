import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import {fetchPosts} from "../features/UserData/userDataSlice";
import{useEffect} from "react";

// Use these typed hooks
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const UserData = () => {
    const dispatch = useAppDispatch();
    const { userInformation, loading, error } = useAppSelector((state) => state.userData); // Use typed selector

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {userInformation.map(({firstName, id, lastName}) => (
                    <li key={id}>{firstName} {lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserData;
