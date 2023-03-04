import React from "react";
import "../components/css/ClearButton.css";

const clearButton = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default clearButton;
