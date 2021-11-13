import './App.css';
import Form from './components/Form/Form';
import Popup from './components/Popup/Popup';
import React, { useState } from 'react';
import Bowser from "bowser";
import Slider from './components/Slider/Slider';

const browser = Bowser.getParser(window.navigator.userAgent);

console.log(browser.getBrowser());

const isValidBrowser = browser.satisfies({
  // declare browsers per OS
  windows: {
    "internet explorer": ">10",
    "edge": "> 90",
  },
  macos: {
    safari: ">10.1"
  },

  // per platform (mobile, desktop or tablet)
  mobile: {
    safari: '>=9',
    'android browser': '>3.10'
  },

  // or in general
  chrome: ">20",
  firefox: ">31",
  opera: ">=22",
});


console.log(isValidBrowser, 'isValidBrowser');


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
      <Slider/>
    </div>
  );
}

export default App;
