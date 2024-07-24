import { useState } from "react";
import styles from "./List.module.css"

function List() {

    const guests = [{
        id: 1,
        name: "Minerva",
        age: 52
    }, {
        id: 2,
        name: "Severus",
        age: 36
    }, {
        id: 3,
        name: "Poppy",
        age: 64
    }, {
        id: 4,
        name: "Horace",
        age: 66
    }, {
        id: 5,
        name: "Gilderoy",
        age: 43
    }];

    const [people, setPeople] = useState(guests);

    const deletePerson = (personId) => {
        setPeople(prevPeople => prevPeople.filter((person) => person.id !== personId));
    };

    return (
        <div className={styles.listContainer}>
            <h3>Guests</h3>
            <ul>
                {people.map(person => (
                    <div className={styles.personContainer} key={person.id}>
                        <li>{person.name} - {person.age}</li>
                        <span onClick={() => deletePerson(person.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#707070"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default List;