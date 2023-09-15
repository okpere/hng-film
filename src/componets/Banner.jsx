import React from "react";
import "./css/Banner.css";
import imbd from "../assets/imbd.svg";
import apple from "../assets/apple.svg";
import ch from "../assets/ch.svg";
const Banner = () => {
  return (
    <div className="Banner">
      <h1>John Wick 3 : Parabellum</h1>
      <div className="banner-discuss">
        <div className="banner-discuss_2">
          <div className="banner-discuss_2" >
            <img src={imbd} alt="" />
            <p>86.0 / 100</p>
          </div>
          <div className="banner-discuss_3">
            <img src={apple} alt="" />
            <span>97%</span>
          </div>
        </div>
        <span>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </span>
      </div>
      <img src={ch} className ="bannerimg" width="150" padding ="20" alt="" />
    </div>
  );
};

export default Banner;
