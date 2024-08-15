import { Provider } from "react-redux";
import { User } from "./components/User/User";
import { hw14Store } from "./store/store";

function App() {
  return (
    <Provider store={hw14Store}>
      <User />
    </Provider>
  );
}

export default App;
