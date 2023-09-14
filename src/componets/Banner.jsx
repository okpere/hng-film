import React from "react";
import "./css/Banner.css";
import tv from "../assets/tv.svg";
const Banner = () => {
  return (
    <div className="Banner">
      <img src={tv} width="30px" />
      <h1>Movie Box</h1>
    </div>
  );
};

export default Banner;
