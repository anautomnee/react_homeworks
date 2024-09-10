import { useDispatch } from "react-redux";
import { Question } from "./components/Question/Question";
import { Result } from "./components/Result";
import { sendChoices } from "./questionnaire/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  return <div >
    <h1 style={{ textAlign: "center" }}>Harry Potter quiz ✨</h1>
    <Result />
    <Question />
    <button className="submitQuiz" onClick={() => dispatch(sendChoices())}>Submit</button>
  </div>;
}

export default App;
