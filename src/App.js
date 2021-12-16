import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Popup from './components/Popup/Popup';
import Bowser from "bowser";
import Slider from './components/Slider/Slider';
import Modal from './components/Modal/Modal';
import Portal from './components/Portal/Portal';


const browser = Bowser.getParser(window.navigator.userAgent);

console.log(browser.getBrowser());

const isValidBrowser = browser.satisfies({
  // declare browsers per OS
  windows: {
    "microsoft edge": ">=18",
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
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);



  const transporterEvent = (data) => {
    console.log(data);

    if (data) {
      setIsBtnPressed(!isBtnPressed)
    }

  };

  const handleClick = () => {
    // Ця функція буде викликана при натисканні на кнопку в компоненті Child
    // і оновить стан компонента Parent, незважаючи на те,
    // що кнопка не є прямим нащадком в DOM.
    setClicks(clicks + 1);
  }

  useEffect(() => {
    // Оновлюємо заголовок документа, використовуючи API браузера
    document.title = `Ви натиснули ${count} разів`;

  });

  return (
    <div className="App">
      <Form statusBtn = {isBtnPressed} />
      <Popup transporterEvent={transporterEvent} />
      <Slider/>
      <Modal/>

      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>

      <div onClick={handleClick}>
        <p>Кількість натискань: {clicks}</p>
        <p>
          Відкрийте DevTools браузера,
          щоб переконатися, що кнопка
          не є нащадком блоку div
          з обробником onClick.
        </p>
        <Portal>
          <Child />
        </Portal>
      </div>
      

    </div>
  );
}

function Child() {
  // Подія натискання на цю кнопку буде спливати вгору до батьківського елемента,
  // тому що не визначено атрибут "onClick"
  return (
    <div className="modal">
      <button>Натисніть</button>
    </div>
  );
}

export default App;
