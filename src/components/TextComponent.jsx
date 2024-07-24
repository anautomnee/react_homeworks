import { useContext } from "react";
import Language from "../context/Language";

function TextComponent() {
  const { language } = useContext(Language);

  const langText = {
    ru: "Этот сайт сейчас на русском",
    eng: "This website is in English now",
  };

  return (
    <>
      <h1>{language === "English" ? langText.eng : langText.ru}</h1>
    </>
  );
}

export default TextComponent;
