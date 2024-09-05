import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/reducers/actionsCreator";

export const UserList = () => {
    const { users, error, isLoading } = useSelector((state) => state.mainReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    return <>
        <h2>User List:</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
            {users && users.map((user, ind) => <li key={ind}>{user.name} ({user.email})</li>)}
        </ul>

    </>
}