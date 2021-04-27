import React, { Fragment, useState } from "react";

import MediaPlayer from "./MediaPlayer";
import Stadistic from "./Stadistic";

function App() {
  /*Manejo de estado de la tabla de estadisticas del video*/
  const [stateStadistic, setStateStadistic] = useState(false);

  /*Funcion para insertar la tabla de estadisticas del video*/
  const setStadistic = () => {
    setStateStadistic(true);
  };

  /*Funcion para quitar la tabla de estadisticas del video*/
  const unsetStadistic = () => {
    setStateStadistic(false);
  };

  return (
    <Fragment>
      <MediaPlayer />
      <div className="navbar">
        <p className="navbar-text">¿Deseas ver estadisticas del video?</p>
        <button className="btn btn-primary" onClick={setStadistic}>
          Si
        </button>
        <button className="btn btn-secundary" onClick={unsetStadistic}>
          No
        </button>
      </div>
      {
        /*Si el estado de la tabla de estadisticas es verdadero, se inserta en el documento
          Por defecto es falso*/
        stateStadistic && <Stadistic />
      }
    </Fragment>
  );
}

export default App;
