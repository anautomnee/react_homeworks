function ShoppingList({ items }) {
    if (items.length > 0) {
        return (
            <ul>
                {items.map((item, ind) => (
                    <li key={ind}>{item}</li>
                ))}
            </ul>
        )
    } else {
        return (<p>Shopping list is empty</p>);
    }
};

export default ShoppingList;