import React, { useState } from 'react'

const Conversor = () => {

//   //Ejemplo de multiples estados
//   const [producto, setProducto] = useState({
//     titulo : "",
//     descripcion: "",
//     price: 0
//   })

// //spread operator
//   setProducto({
//     ...producto,
//     titulo: "Leche",
//     price: 150
//   })

  const [conversor, setConversor] = useState(0);

  const convertir = (e) => {

    let monto = e.target.value;

    let cotizar = monto / 300;

    setConversor(cotizar);

  }

  return (
    <div>
        <input onChange={convertir} type="text" placeholder='Ingrese pesos' />

      <h1>Su monto en dolares es: {conversor}</h1>
    </div>
  )
}

export default Conversor