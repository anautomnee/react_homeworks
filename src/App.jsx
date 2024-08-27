import { Main } from "./components/Main";
import { Theme } from "./context/theme";

function App() {
  return (
    <Theme>
      <Main />
    </Theme>
  );
}

export default App;
