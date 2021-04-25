import React from "react";

import "./css/NavbarTable.css";

function NavbarTable() {
  return (
    <div className="navbar navbar-sort">
      <p className="navbar-text">Ordenar por:</p>
      <div className="btn btn-option">
        <button>Generacion</button>
        <div className="options">
          <span className="options-symb">*</span>
          <ul className="options-list">
            <li className="option">
              <button>Milenials</button>
            </li>
            <li className="option">
              <button>Baby Boomer</button>
            </li>
            <li className="option">
              <button>Gen X</button>
            </li>
            <li className="option">
              <button>Gen Y</button>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn btn-option">Semanal</button>
    </div>
  );
}

export default NavbarTable;
