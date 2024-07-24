import List from "./List/List";
import Rating from "./Rating/Rating";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Rating />
      <List />
    </div>
  );
}

export default App;
