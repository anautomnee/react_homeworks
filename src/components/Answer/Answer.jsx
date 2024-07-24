import { useState } from "react";
import styles from "./Answer.module.css"

function Answer ({updatePoints, num1, num2}) {

    const [userAnswer, setUserAnswer] = useState('');
    const [isWrong, setIsWrong] = useState(false);

    const handleChange = (newAnswer) => {
        setUserAnswer(newAnswer)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userAnswer) {
            if (Number(userAnswer) === num1 + num2) {
                setIsWrong(false);
                updatePoints();
                setUserAnswer('');
            } else if (!isWrong) {
                setIsWrong(true);
            }
        }
    };

    return (
        <div>
            {isWrong && <p style={{color: "red"}}>Try again</p>}
            <form onSubmit={(event) =>handleSubmit(event)} className={styles.form}>
                <input type="number" name="answerInput" id="answerInput" value={userAnswer} onChange={(event) => handleChange(event.target.value)} />
                <input type="submit" value="Check" />
            </form>
        </div>
    );
    
};

export default Answer;