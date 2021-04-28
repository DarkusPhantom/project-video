import React from "react";

import "./css/Video.css";

//Estructura del video
const Video = ({ video }) => {
  return (
    <video
      id="video"
      controls="controls"
      muted="muted"
      type="video/mp4"
      src={video}
    ></video>
  );
};

export default Video;
