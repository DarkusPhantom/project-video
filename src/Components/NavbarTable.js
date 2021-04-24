import React from "react";

import "./css/NavbarTable.css";

function NavbarTable() {
  return (
    <div class="navbar-sort">
      <p className="navbar-text">Ordenar por:</p>
      <a class="btn btn-option">Generacion</a>
      <a class="btn btn-option">Por Semana</a>
    </div>
  );
}

export default NavbarTable;
