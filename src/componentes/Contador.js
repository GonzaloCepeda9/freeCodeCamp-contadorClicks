import React from "react";
import "../estilos/Contador.css"

function Contador ({ mostrarClicks }) {
    return (
        <div className="contador">
            {mostrarClicks}
        </div>
    );
}

export default Contador;