import Alert from "./components/Alert";
import Like from "./components/Like";
import Buttons from "./components/Buttons/Buttons";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { FaCalendarAlt } from 'react-icons/fa';
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";


function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [onLike, setLike] = useState(false);

  const items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Submited Succesfully!</Alert>
      )}

      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={(item) => console.log(item)}
      />

      <Like />

      <FaCalendarAlt size="50" />

      <Buttons color="primary" onClick={() => setShowAlert(true)}>
        Submit
      </Buttons>
    </div>
  );
}

export default App;
