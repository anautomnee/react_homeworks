import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";

const shoppingListArr = ["milk", "bread", "eggs"];
const orderInfo = [{
  orderId: 123, 
  status: "Processing"}, {
  orderId: 124, 
  status: "Out for delivery"
  }, {
    orderId: 125, 
    status: "Delivered"
  }];

function App() {
  return (
    <>
      <h1>Task 1</h1>
      < Greeting name="Jane"/>
      <h1>Task 2</h1>
      < ShoppingList items={shoppingListArr} />
      <h1>Task 3</h1>
      {orderInfo.map(order => (
        < OrderStatus key={order.orderId} orderId={order.orderId} status={order.status}/>
      ))}
    </>
  );
}

export default App;
