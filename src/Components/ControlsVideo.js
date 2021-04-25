import React from "react";

import "./css/ControlsVideo.css";
import Heart from "../Images/Icons/heart.svg";
import HeartBroken from "../Images/Icons/heart-broken.svg";

const ControlsVideo = () => {
  return (
    <div className="controls">
      <button className="btn btn-reaction like">
        <img src={Heart} alt="Heart" />
      </button>
      <a className="btn btn-reaction dislike">
        <img src={HeartBroken} alt="Heart Broken" />
      </a>
      <button className="btn more-info">More Info</button>
    </div>
  );
};

export default ControlsVideo;
