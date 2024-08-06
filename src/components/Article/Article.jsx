import { useContext } from "react";
import ArticlesContext from "../../context/ArticlesContext";
import { useParams } from "react-router-dom";
import s from "./Article.module.css";
import { Menu } from "../Menu";
import { useNavigate } from "react-router-dom";

export const Article = () => {
  const { article_id } = useParams();

  const data = useContext(ArticlesContext);
  const article = data.articles[article_id - 1];
  const navigate = useNavigate();

  return (
    <div className="main">
      <Menu />
      <div className={s.article_container}>
        <img src={article?.photo} alt={article?.title} className={s.img} />
        <h2 className={s.header}>{article?.title}</h2>
        <p className={s.category}>{article?.category}</p>
        <p className={s.text}>{article?.body}</p>
        <button onClick={() => navigate("/articles")} className={s.btn}>
          Go back to all articles
        </button>
      </div>
    </div>
  );
};
