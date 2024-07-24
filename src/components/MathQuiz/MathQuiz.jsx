import { useState } from "react";
import Answer from "../Answer/Answer";
import styles from "./MathQuiz.module.css"

function MathQuiz () {

    const [score, setScore] = useState(0);
    const [a, setA] = useState(Math.floor(Math.random() * 20));
    const [b, setB] = useState(Math.floor(Math.random() * 20));

    function updatePoints () {
        setA(Math.floor(Math.random() * 20));
        setB(Math.floor(Math.random() * 20));
        setScore(prevScore => prevScore + 1);
    };

    return (
        <div className={styles.questionContainer}>
            <h2>Score: {score}</h2>
            <h2>{a} + {b} = ?</h2>
            <Answer updatePoints={updatePoints} num1={a} num2={b}/>
        </div>
    );
};

export default MathQuiz;