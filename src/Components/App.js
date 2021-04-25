import React, { Fragment, useState } from "react";

import MediaPlayer from "./MediaPlayer";
import Stadistic from "./Stadistic";

function App() {
  const [stateStadistic, setStateStadistic] = useState(false);

  const setStadistic = () => {
    setStateStadistic(true);
  };

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
      {stateStadistic && <Stadistic />}
    </Fragment>
  );
}

export default App;
