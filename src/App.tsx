import Alert from "./components/Alert";
import Like from "./components/Like";
import Cart from "./components/Cart";
import Buttons from "./components/Buttons/Buttons";
import ListGroup from "./components/ListGroup";
import Player from "./components/Player";
import Pizza from "./components/Pizza";
import Product from "./components/Product";

import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";




function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [onLike, setLike] = useState(false);

  const [items, setItems] = useState(["New York", "San Francisco", "Tokyo", "London", "Berlin"]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["Cheese", "Pepperoni"],
  });
  
  const [products, setProducts] = useState({
    discount: 50,
    items: [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
    ],
  })

  return (
    <div>
      <Product products = {products}/>

      <Buttons color="primary" onClick={() => { setProducts({...products, items: products.items.map(item => item.id === 3 ? {...item, price: 150} : {...item})})}}>
        Submit
      </Buttons>


















      {/* {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Deleted Succesfully!</Alert>
      )}

      <ListGroup
        items={items}
        heading="Countries"
        itemsCount={items.length}
        onSelectItem={(item) => console.log(item)}
      />
      
      <Cart
        items={items}
        heading="Countries"
        itemsCount={items.length}
      />

      <Like /> */}
    </div>
  );
}

export default App;
