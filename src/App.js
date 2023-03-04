import "./components/css/App.css";
import logoFelipe from "./img/logo-felipe.PNG";
import Button from "./components/Button";
import Display from "./components/Display";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const InputEntry = (val) => {
    setInput(input + val);
  };

  const totalCalculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores validos");
    }
  };

  
  return (
    <div className="App">
    
      <div className="contenedor-calculadora"> 
       <div className="logo-contenedor">
        <img
          src={logoFelipe}
          className="img-logo-contenedor"
          alt="logo-contenedor"
        />
      </div>
        <Display input={input} />
        <div className="fila">
          <Button handlerClick={InputEntry}>1</Button>
          <Button handlerClick={InputEntry}>2</Button>
          <Button handlerClick={InputEntry}>3</Button>
          <Button handlerClick={InputEntry}>+</Button>
        </div>

        <div className="fila">
          <Button handlerClick={InputEntry}>4</Button>
          <Button handlerClick={InputEntry}>5</Button>
          <Button handlerClick={InputEntry}>6</Button>
          <Button handlerClick={InputEntry}>-</Button>
        </div>
        <div className="fila">
          <Button handlerClick={InputEntry}>7</Button>
          <Button handlerClick={InputEntry}>8</Button>
          <Button handlerClick={InputEntry}>9</Button>
          <Button handlerClick={InputEntry}>*</Button>
        </div>
        <div className="fila">
          <Button handlerClick={totalCalculate}>=</Button>
          <Button handlerClick={InputEntry}>0</Button>
          <Button handlerClick={InputEntry}>.</Button>
          <Button handlerClick={InputEntry}>/</Button>
        </div>
        <ClearButton manejarClear={() => setInput("")}>Clear</ClearButton>
      </div>
    </div>
  );
}

export default App;
