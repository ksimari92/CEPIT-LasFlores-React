import React, { useState } from 'react'

const Superficie = () => {

    const [rectangulo, setRectangulo] = useState({ 
        alto: "",
        ancho: ""
    })

    const [superficie, setSuperficie] = useState(0);  //desestructuracion de arrays

    const handleChangeInputAncho = (e) => {
        setRectangulo({
            ...rectangulo,         // spread operator
            ancho: e.target.value
        })
    }

    const handleChangeInputAlto = (e) => {
        setRectangulo({
            ...rectangulo,
            alto: e.target.value
        })
    }

    const calcularSuperficie = () => {
        let resultado = rectangulo.ancho * rectangulo.alto;        

        setSuperficie(resultado);
    }


  return (
    <div>
        <input type="text" onChange={handleChangeInputAncho} placeholder='Ingrese el ancho del rectangulo' />
        <br />
        <input type="text"  onChange={handleChangeInputAlto} placeholder='Ingrese el alto del rectangulo'/>
        <br />
        <button onClick={calcularSuperficie}>
            Calcular
        </button>

        <h1>LA superficie del rectangulo es: {superficie}</h1>
    </div>
  )
}

export default Superficie