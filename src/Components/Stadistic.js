import React, { useState } from "react";

import "./css/Stadistic.css";
import "./css/NavbarTable.css";
import StadisticTable from "./StadisticTable";

//Componente de Estadisticas del Video
//Se encuentra la barra superior para hacer sort
//Se encuentra la tabla de datos para la tabla de estadisticas
function Stadistic() {
  //Estado para manejar mostrar la lista de opciones
  const [stateInfo, setInfo] = useState(false);

  /*Activa o desactiva la lista de opciones del btn cada vez que hace click*/
  const showInfo = () => {
    setInfo((prevValue) => !prevValue);
  };

  /*Lista de Opciones para el btn para plasmarlo en el HTML
   * cada vez que se llame*/
  const listBtnOption = () => {
    return (
      <ul className="options-list">
        <li className="option">
          <button id="millennials" onClick={sortTable}>
            Milenials
          </button>
        </li>
        <li className="option">
          <button id="babyBoomer" onClick={sortTable}>
            Baby Boomer
          </button>
        </li>
        <li className="option">
          <button id="genX" onClick={sortTable}>
            Gen X
          </button>
        </li>
      </ul>
    );
  };

  //Maneja el estado de sort para enviarlo a la tabla
  const [data, setData] = useState("");

  //El resultado que devuelve va a indicar como va a ordenar la tabla
  //Caso contrario, retorna vacio
  const sortTable = (event) => {
    const option = event.target.id;

    switch (option) {
      case "millennials":
        setData("Millennial");
        break;
      case "babyBoomer":
        setData("Baby Boomer");
        break;
      case "genX":
        setData("Generation X");
        break;
      default:
        setData("");
    }
  };

  return (
    <div className="Stadistic slideinFast">
      <div className="navbar navbar-sort">
        <p className="navbar-text">Ordenar por:</p>
        <div className="btn btn-option">
          <button id="age_range" onClick={showInfo}>
            Generacion
          </button>
          <div className="options">
            <button className="options-symb" onClick={showInfo}>
              ▼
            </button>
            {
              /*Muestra la lista de opciones en caso de que sea verdado.
               * Las quita si es falso*/
              stateInfo && listBtnOption()
            }
          </div>
        </div>
        <div className="btn btn-option">
          <button id="reset" onClick={sortTable}>
            Reset
          </button>
        </div>
      </div>
      <StadisticTable sortData={data} />
    </div>
  );
}

export default Stadistic;
