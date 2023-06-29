import React, { useState } from 'react'

const Forms = () => {

const [datos, setDatos] = useState({
    nombre: "",
    apellido: ""
})

const handleChangeInput = (e) => {
    // console.log(e.target.value);

    // console.log(e.target.name);
    console.log(e);

    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
}

const enviarDatos = (e) => {
    e.preventDefault();
    console.log("enviando datos ... " + datos.nombre + " " + datos.apellido)
}

  return (
    <div>
        <form action="" onSubmit={enviarDatos}>
            <input type="text"
             placeholder='Nombre' 
             name='nombre'
             onChange={handleChangeInput}/>
<br />
            <input type="text" 
            placeholder='Apellido'
             name='apellido'
             onChange={handleChangeInput}/>
<br />
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Forms