import React, { Fragment } from "react";

import MediaPlayer from "./MediaPlayer";
import Navbar from "./Navbar";
import Stadistic from "./Stadistic";

function App() {
  return (
    <Fragment>
      <MediaPlayer />
      <Navbar />
      <Stadistic />
    </Fragment>
  );
}

export default App;
