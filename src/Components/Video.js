import React from "react";

import "./css/Video.css";
import Video1 from "../video/video_1.mp4";
import Video2 from "../video/video_1.mp4";
import Video3 from "../video/video_1.mp4";

const Video = () => {
  return (
    <video id="video" controls="controls" muted="muted">
      <source type="video/mp4" src={Video1} />
      <source type="video/mp4" src={Video2} />
      <source type="video/mp4" src={Video3} />
    </video>
  );
};

export default Video;
