import React from 'react'

const Eventos = () => {

    let nombre = "Karen";
    const saludar = (event) => {
       
        console.log(event)
        alert("Hola!")
    }

    return (
        <div>
            <button onClick={saludar}>Click</button>
            <p>Hola, me llamo {nombre} </p>
        </div>
    )
}

export default Eventos


