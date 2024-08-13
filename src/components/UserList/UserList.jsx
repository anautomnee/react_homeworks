import { useSelector } from "react-redux";
import { UserItem } from "../UserItem/UserItem";
import s from "./UserList.module.css";

export const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className={s.container}>
      {users?.map((user, ind) => (
        <UserItem key={ind} user={user} />
      ))}
    </div>
  );
};
