import { fetchArticles } from "./apis/api";
import ArticlesContext from "./context/ArticlesContext";
import { useState, useEffect } from "react";
import { MainRoute } from "./routes/MainRoute";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((res) => setArticles(res));
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles }}>
      <MainRoute />
    </ArticlesContext.Provider>
  );
}

export default App;
