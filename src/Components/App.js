import React, { Fragment, useEffect, useState } from "react";

import MediaPlayer from "./MediaPlayer";
import Stadistic from "./Stadistic";

function App() {
  const [isSetStadistic, setStadistic] = useState(false);

  return (
    <Fragment>
      <MediaPlayer />
      <div className="navbar">
        <p className="navbar-text">¿Deseas ver estadisticas del video?</p>
        <button className="btn btn-primary">Si</button>
        <button className="btn btn-secundary">No</button>
      </div>
      <Stadistic />
    </Fragment>
  );
}

export default App;
