import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./css/main.css";
import back from "../assets/back_icon.png";

const Main = () => {
  return (
    <div>
      <Banner />
      <div className="main">
        <h1>Featured Movie</h1>
        <div className="main_see">
          <p>see more </p> <img src={back} height="25px" alt="back" />
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Main;
