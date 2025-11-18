import Alert from "./components/Alert";
import Like from "./components/Like";
import Cart from "./components/Cart";
import Buttons from "./components/Buttons/Buttons";
import ListGroup from "./components/ListGroup";
import Player from "./components/Player";
import Pizza from "./components/Pizza";
import Product from "./components/Product";
import ExpandableText from "./components/ExpandableText";

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
  const [text, setText] = useState(`
    Sometimes life feels heavy, and progress feels slow.
    But what we often forget is that greatness is not built in one moment — it is built quietly, through thousands of small actions that nobody notices. Every late night you stayed studying, every project you started even if you were tired, every habit you tried to improve, every time you kept going even when you didn’t feel like it — all of that is shaping a stronger, wiser, more disciplined version of you.

    Success is not only about talent.
    It’s about responsibility, consistency, and the ability to stay focused while others are distracted. It’s about choosing growth over comfort, even when comfort looks easier. It’s about believing that your future deserves the effort you give today. And even if nobody tells you, even if nobody sees your struggle, you are still building something valuable.

    The truth is, every person has moments where they feel lost, tired, and uncertain. But the difference between those who move forward and those who stay stuck is simple: the ones who move forward keep taking small steps even when everything feels difficult. You don’t have to be perfect. You just have to keep going.

    Your dreams don’t require you to be the smartest or the strongest — they require dedication. They require that you show up, again and again, even when motivation disappears. Motivation comes and goes, but discipline stays. Discipline is what carries you through the long nights, the busy days, the confusing moments, and the setbacks. Discipline is what builds your future.

    And remember: you don’t have to compete with anyone else. You only need to compete with your past self. Try to be even 1% better each day. Learn one thing. Improve one habit. Fix one weakness. Take one step. Over time, those small improvements build a life you are proud of.
`);
  const [isExpanded, setExpanded] = useState(false);

  return (
  <div>

    <ExpandableText maxChars={400} isExpanded={isExpanded}>
      {text}
    </ExpandableText>

    <Buttons color="primary" onClick={() => setExpanded(!isExpanded)}>
      {isExpanded ? "Less" : "More"}
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
