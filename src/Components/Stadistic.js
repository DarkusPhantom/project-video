import React from "react";

import "./css/Stadistic.css";
import NavbarTable from "./NavbarTable";
import StadisticTable from "./StadisticTable";

//Componente de Estadisticas del Video
//Se encuentra la barra superior para hacer sort
//Se encuentra la tabla de datos para la tabla de estadisticas
function Stadistic() {
  return (
    <div className="Stadistic slideinFast">
      <NavbarTable />
      <StadisticTable />
    </div>
  );
}

export default Stadistic;
