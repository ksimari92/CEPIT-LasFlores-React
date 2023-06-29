import Conversor from "./components/Conversor"
import ConversorGrados from "./components/ConversorGrados"
import Estados from "./components/Estados"
import Eventos from "./components/Eventos"
import Superficie from "./components/Superficie"
import Forms from "./components/Forms"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"

function App() {

  return (

     <>
       {/*
      <Eventos /> 
      <Estados />
      */}
      {/* <Conversor/> */}
      {/* <Superficie /> */}
      {/* <Forms/> */}
      <BrowserRouter>
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/formulario">Formulario </Link>
            <Link to="/conversor">Conversor </Link>
          </nav>

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/formulario" element={<Forms/>}/>
              <Route path="/conversor" element={<ConversorGrados/>}/>
          </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
