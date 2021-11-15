import './Form.css';
import { useRef } from 'react';
import React, { useState, useEffect } from 'react';

function Form(props) {

  const submitEL = useRef();

  const onButtonClick = (e) => {
    
  };


  useEffect(() => {

    if (props.statusBtn) {
      submitEL.current.click();
      submitEL.current.classList.add('active');
    }

  });

  return (
    <div className="form">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button ref={submitEL} onClick={onButtonClick}>Send</button>
      </form>
    </div>
  );
}

export default Form;
