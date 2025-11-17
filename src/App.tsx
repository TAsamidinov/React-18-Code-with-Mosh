import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { FaCalendarAlt } from 'react-icons/fa';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Submited Succesfully!</Alert>
      )}
      <FaCalendarAlt size="50" />
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={(item) => console.log(item)}
      />
      <Buttons color="primary" onClick={() => setShowAlert(true)}>
        Submit
      </Buttons>
    </div>
  );
}

export default App;
