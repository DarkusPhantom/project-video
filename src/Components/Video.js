import React from "react";

import "./css/Video.css";
import Video1 from "../video/video_1.mp4";

const Video = ({ video }) => {
  return (
    <video id="video" controls="controls" muted="muted">
      <source type="video/mp4" src={Video1} />
    </video>
  );
};

export default Video;
