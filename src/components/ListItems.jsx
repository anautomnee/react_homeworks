import { useState, useEffect } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("component mounted");
  }, []);

  function addItem() {
    setItems([...items, inputValue]);
    setInputValue("");
  }

  function changeInput(value) {
    setInputValue(value);
  }

  return (
    <div>
      <ul>
        {items.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => changeInput(event.target.value)}
      />
      <button onClick={addItem}>Add an item</button>
    </div>
  );
}

export default ListItems;
