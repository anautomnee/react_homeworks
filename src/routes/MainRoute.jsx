import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { ArticleList } from "../components/ArticleList";
import { Article } from "../components/Article/Article";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/articles" element={<ArticleList />}></Route>
      <Route path="/articles/:article_id" element={<Article />}></Route>
    </Routes>
  );
};
