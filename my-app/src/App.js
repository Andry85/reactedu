import './App.css';
import Form from './components/Form/Form';
import Popup from './components/Popup/Popup';
import React, { useState } from 'react';

function App() {

  const [isBtnPressed, setIsBtnPressed] = useState(false);
  


  const transporterEvent = (data) => {
    console.log(data);

    if (data) {
      setIsBtnPressed(!isBtnPressed)
    }

  };

  return (
    <div className="App">
      <Form statusBtn = {isBtnPressed} />
      <Popup transporterEvent={transporterEvent} />
    </div>
  );
}

export default App;
