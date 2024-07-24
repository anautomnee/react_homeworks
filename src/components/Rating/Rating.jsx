import { useState } from "react";
import styles from "./Rating.module.css";

function Rating() {
    
    const ratingList = [
        "./ratingImgs/1.png",
        "./ratingImgs/2.png",
        "./ratingImgs/3.png",
        "./ratingImgs/4.png",
        "./ratingImgs/5.png"
    ];
    
    const [ratingValue, setRatingValue] = useState(ratingList[0]);

    const changeRatingImg = (rating) => {
        setRatingValue(ratingList[rating]);
    };

    return (
        <div className={styles.ratingDiv}>
            <h3>Preview rating images</h3>
            <img src={ratingValue} alt="rating"></img>
            <select name="ratings" id="ratings--select" onChange={(event) => changeRatingImg(event.target.value)}>
                <option value="0">Terrible</option>
                <option value="1">Bad</option>
                <option value="2">Acceptable</option>
                <option value="3">Good</option>
                <option value="4">Excellent</option>
            </select>
        </div>
    );
};

export default Rating;