import s from "./UserForm.module.css";
import { useForm } from "react-hook-form";

export const UserForm = ({ changeInfo, user_name, user_status }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    changeInfo(data);
  };

  return (
    <form className={s.form_container} onSubmit={handleSubmit(formSubmit)}>
      <h3 className={s.title}>Edit user information</h3>
      <label htmlFor="user_name">Name:</label>
      <input
        type="text"
        id="user_name"
        defaultValue={user_name}
        className={s.input}
        {...register("user_name", {
          required: true,
          pattern: /[A-Za-z]{3}/,
        })}
      />
      {errors.user_name && (
        <span className={s.error}>Name must be three letters or more</span>
      )}
      <label htmlFor="user_status">Status:</label>
      <input
        type="text"
        id="user_status"
        className={s.input}
        defaultValue={user_status}
        {...register("user_status", {
          required: true,
          pattern: /[A-Za-z]{3}/,
        })}
      />
      {errors.user_status && (
        <span className={s.error}>Status must be three letters or more</span>
      )}
      <button type="submit" className={s.btn}>
        Save changes
      </button>
    </form>
  );
};
