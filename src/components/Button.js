import React from "react";
import '../components/css/Button.css'



function Button(props){ 
    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <div className={`boton-contenedor ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}  onClick={() => props.handlerClick(props.children)}>
            {props.children}
        </div>
    )

}


export default Button;