import React from "react";

import './Button.scss';

const Button = ({ colour, text }) => {
  return  (
    <button class = {`custom-btn ${colour}`}>
        {text}
    </button>
  )
};


export default Button;