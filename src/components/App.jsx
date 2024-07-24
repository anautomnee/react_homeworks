import ButtonComponent from "./ButtonComponent";
import LangComponent from "./LangComponent";
import TextComponent from "./TextComponent";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <LangComponent>
        <TextComponent />
        <ButtonComponent />
      </LangComponent>
    </div>
  );
}

export default App;
