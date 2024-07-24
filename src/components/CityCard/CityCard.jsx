import styles from "./CityCard.module.css"

function CityCard({ city }) {
    return (
        <div className={styles.card}>
            <h3>{city.name}</h3>
            <div className={styles.imgContainer}>
                <img src={city.imageUrl} alt={city.name}></img>
            </div>
            <p className={styles.description}>{city.description}</p>
            <ul className={styles.list}>
                {city.facts.map((fact, ind) => <li key={ind}>{fact}</li>)}
            </ul>
        </div>
    );
};

export default CityCard;