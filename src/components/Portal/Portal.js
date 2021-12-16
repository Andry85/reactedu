import { createPortal } from "react-dom";
import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Елемент порталу додається в DOM-дерево після того, як
    // дочірні компоненти Modal будуть змонтовані, а це означає,
    // що дочірні компоненти будуть монтуватися на окремому DOM-вузлі.
    // Якщо дочірній компонент повинен бути приєднаний до DOM-дерева
    // відразу при підключенні, наприклад, для вимірювань DOM-вузла
    // або виклику в дочірньому елементі 'autoFocus', додайте в компонент Modal
    // стан і рендеріть дочірні елементи тільки тоді, коли
    // компонент Modal вже вставлений в DOM-дерево.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default Portal;