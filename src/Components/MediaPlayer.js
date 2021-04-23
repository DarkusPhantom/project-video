import React, { Fragment } from "react";

import "./css/MediaPlayer.css";
import Video from "./Video";
import BtnVideo from "./BtnVideo";

function App() {
  return (
    <section className="MediaPlayer">
      <Video />
      <BtnVideo />
    </section>
  );
}

export default App;
