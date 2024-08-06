import s from "./ArticleCard.module.css";
import ArticlesContext from "../../context/ArticlesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ArticleCard = () => {
  const data = useContext(ArticlesContext);
  return (
    <Link to={"/articles/" + data?.articles[0]?.id}>
      <div className={s.container}>
        <img className={s.img} src={data?.articles[0]?.photo} alt="article" />
        <p className={s.category}>{data?.articles[0]?.category}</p>
        <h2 className={s.title}>{data?.articles[0]?.title}</h2>
        <div className={s.textwrapper}>
          <p className={s.text}>{data?.articles[0]?.body}</p>
        </div>
      </div>
    </Link>
  );
};
