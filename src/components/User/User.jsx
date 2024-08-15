import s from "./User.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../store/action";
import { UserForm } from "../UserForm/UserForm";

export const User = () => {
  const user_name = useSelector((state) => state.name);
  const user_status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const changeInfo = (info) => {
    dispatch(setUserInfo(info));
  };

  return (
    <div>
      <div className={s.info_container}>
        <h1>User Profile</h1>
        <h3>User information</h3>
        <span>Name: {user_name}</span>
        <span>Status: {user_status}</span>
      </div>
      <UserForm
        changeInfo={changeInfo}
        user_name={user_name}
        user_status={user_status}
      />
    </div>
  );
};
