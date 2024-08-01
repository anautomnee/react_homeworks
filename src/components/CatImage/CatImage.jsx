import s from "./CatImage.module.css";
import { useEffect, useState } from "react";
import { fetchCat } from "../../api/api";

export const CatImage = () => {
  const [cat, setCat] = useState(false);

  useEffect(() => {
    fetchCat().then((res) => setCat(res));
  }, []);

  const changeCat = () => {
    fetchCat().then((res) => setCat(res));
  };

  return (
    <div className={s.main}>
      <h2>Random cat</h2>
      <div className={s.cat__container}>
        <img src={cat.url} alt={cat.id} />
      </div>
      <button onClick={changeCat} className={s.btn}>
        Change cat
      </button>
    </div>
  );
};
