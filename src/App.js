import "./App.css";
import Logo from "./componentes/Logo";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  function aumentarClick () {
    setNumClicks(numClicks + 1);
  }

  function reiniciarClick () {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-principal">
        <Contador
          mostrarClicks={numClicks}
        />
        <Boton
          esBotonDeClick={true}
          manejarClick={aumentarClick}
          texto="Click"
        />
        <Boton
          esBotonDeClick={false}
          manejarClick={reiniciarClick}
          texto="Reiniciar"
        />
      </div>
    </div>
  );
}

export default App;
