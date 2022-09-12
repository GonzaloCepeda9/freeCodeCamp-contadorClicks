import React from "react";
import freeCodeCampLogo from "../imagenes/freecodecamp-logo.png";
import "../estilos/Logo.css";

function Logo () {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp"/>
    </div>
  );
}

export default Logo;