import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <ul className={s.container}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/articles">Articles</NavLink>
      </li>
    </ul>
  );
};
