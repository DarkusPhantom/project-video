import React from "react";

import "./css/MediaPlayer.css";
import Video from "./Video";
import ControlsVideo from "./ControlsVideo";

function App() {
  return (
    <section className="MediaPlayer">
      <Video />
      <ControlsVideo />
    </section>
  );
}

export default App;
