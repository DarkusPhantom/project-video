import React from "react";

import "./css/NavbarTable.css";

function NavbarTable() {
  return (
    <div class="navbar navbar-sort">
      <p className="navbar-text">Ordenar por:</p>
      <div className="btn btn-option">
        <a>Generacion</a>
        <div className="options">
          <span className="options-symb">*</span>
          <ul className="options-list">
            <li className="option">
              <a>Milenials</a>
            </li>
            <li className="option">
              <a>Baby Boomer</a>
            </li>
            <li className="option">
              <a>Gen X</a>
            </li>
            <li className="option">
              <a>Gen Y</a>
            </li>
          </ul>
        </div>
      </div>
      <a class="btn btn-option">Semanal</a>
    </div>
  );
}

export default NavbarTable;
