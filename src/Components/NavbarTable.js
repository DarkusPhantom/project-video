import React, { useState } from "react";

import "./css/NavbarTable.css";

const listBtnOption = () => {
  return (
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
  );
};

function NavbarTable() {
  const [stateBtnOption, setBtnOption] = useState(false);

  const handleClick = () => {
    setBtnOption((prevValue) => !prevValue);
  };

  return (
    <div className="navbar navbar-sort">
      <p className="navbar-text">Ordenar por:</p>
      <div className="btn btn-option">
        <button>Generacion</button>
        <div className="options">
          <button className="options-symb" onClick={handleClick}>
            ▼
          </button>
          {stateBtnOption && listBtnOption()}
        </div>
      </div>
      <div className="btn btn-option">
        <button>Semanal</button>
      </div>
    </div>
  );
}

export default NavbarTable;
