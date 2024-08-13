import s from "./UserItem.module.css";

export const UserItem = ({ user }) => {
  return <p className={s.name}>{user}</p>;
};
