import Alert from "./components/Alert";
import Like from "./components/Like";
import Cart from "./components/Cart";
import Buttons from "./components/Buttons/Buttons";
import ListGroup from "./components/ListGroup";
import Player from "./components/Player";
import Pizza from "./components/Pizza";

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

  return (
    <div>
      <Pizza pizza={pizza} />

      <Buttons color="primary" onClick={() => { setPizza({...pizza, toppings: [...pizza.toppings, 'Olives']})}}>
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
