import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>This is an alert!</Alert>
      )}
      <Buttons color="primary" onClick={() => setShowAlert(true)}>
        Primary
      </Buttons>
    </div>
  );
}

export default App;
