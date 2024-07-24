import { useContext, useState } from "react";
import Language from "../context/Language";
import ruIcon from "../assets/ru.png";
import engIcon from "../assets/eng.png";

function ButtonComponent() {
  const { language, setLanguage } = useContext(Language);
  const [langIcon, setLangIcon] = useState(engIcon);

  function switchLanguage() {
    setLanguage(language === "English" ? "Russian" : "English");
    setLangIcon(language === "English" ? ruIcon : engIcon);
  }

  return (
    <>
      <img
        src={langIcon}
        alt={language}
        onClick={switchLanguage}
        style={{ width: "40px", cursor: "pointer" }}
      />
    </>
  );
}

export default ButtonComponent;
