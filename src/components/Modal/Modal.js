import React, { useState, useEffect } from 'react';
import './Modal.css';


function Modal(props) {
  const [isOpened, setOpened] = useState(true);

  const coleModal = () => {
    setOpened(!isOpened);
  }

  useEffect(() => {

    console.log('modal is shown');
    
    return () => {
      console.log('modal is hidden');
    };

  }, [isOpened]);


  return (
    <>
      {isOpened && 
        <div className="modal">
          <div className="modal__cloze" onClick={coleModal}>x</div>
        </div>
      }
    </>
  );
}

export default Modal;
