import { useDispatch } from "react-redux";
import { setFilter } from "../../store/actions";
import { useState, useEffect } from "react";
import s from "./Filter.module.css";

export const Filter = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(inputValue));
  }, [inputValue, dispatch]);

  return (
    <div className={s.container}>
      <h1>User List</h1>
      <input
        className={s.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
