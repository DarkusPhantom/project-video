import React from "react";

import "./css/BtnVideo.css";
import Heart from "../Images/Icons/heart.svg";
import HeartBroken from "../Images/Icons/heart-broken.svg";

const BtnVideo = () => {
  return (
    <div className="controls">
      <a className="btn btn-reaction like">
        <img src={Heart} alt="Heart" />
      </a>
      <a className="btn btn-reaction dislike">
        <img src={HeartBroken} alt="Heart Broken" />
      </a>
      <a className="btn more-info">More Info</a>
    </div>
  );
};

export default BtnVideo;
