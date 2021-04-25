import React, { useState } from "react";

import "./css/NavbarTable.css";

function NavbarTable() {
  /*  const [stateStadistic, setStateStadistic] = useState(false);

  const setStadistic = () => {
    setStateStadistic(true);
  };

  const unsetStadistic = () => {
    setStateStadistic(false);
  };*/

  return (
    <div className="navbar navbar-sort">
      <p className="navbar-text">Ordenar por:</p>
      <div className="btn btn-option">
        <button>Generacion</button>
        <div className="options">
          <button className="options-symb">▼</button>
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
      <div className="btn btn-option">
        <button>Semanal</button>
      </div>
    </div>
  );
}

export default NavbarTable;
