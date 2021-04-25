import React from "react";

import "./css/ControlsVideo.css";
import { ReactComponent as Heart } from "../Images/Icons/heart.svg";
import { ReactComponent as HeartBroken } from "../Images/Icons/heart-broken.svg";

const ControlsVideo = () => {
  return (
    <div className="controls">
      <button className="btn btn-reaction like">
        <Heart />
      </button>
      <button className="btn btn-reaction dislike">
        <HeartBroken />
      </button>
      <button className="btn more-info">More Info</button>
    </div>
  );
};

export default ControlsVideo;
