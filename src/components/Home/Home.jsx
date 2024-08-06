import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Menu } from "../Menu/Menu";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div className="main">
      <Menu />
      <h1 className={s.header}>An easy blog</h1>
      <p>What's new on an easy blog</p>
      <ArticleCard />
    </div>
  );
};
