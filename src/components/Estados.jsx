import React, { useState } from 'react'

const Estados = () => {

    const [nombre, setNombre] = useState("Karen");

    const cambiarNombre = () => {
        if(nombre == "Karen" ) {
            setNombre("Juan");
        } else {
            setNombre("Karen");

        }
    }

  return (
    <div>
        {nombre}
        <br />
        <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  )
}

export default Estados


