import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useEffect } from "react";

const Users = (props) => {
  const users = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h4>Authors</h4>
      <select>
        <option value={-1}>Select Author</option>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Users;
