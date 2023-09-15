import React from "react";
import tv from "../assets/tv.svg";
import home from "../assets/Home.svg";
import movie from "../assets/Movie.svg";
import show from "../assets/TV Show.svg";
import logout from "../assets/Logout.svg";
import calender from "../assets/Calendar.svg";
import "./css/sidebar.css";


const sideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={tv} alt="" />
        <h1>Movie Box</h1>
      </div>
      <ul>
        <li>
        <img src={home} alt="" />  Home 
        </li>
        <li>
        <img src={movie} alt="" />  Movies 
        </li>
        <li>
        <img src={show} alt="" /> TV Series 
        </li>
        <li>
        <img src={calender} alt="" /> Upcoming
        </li>
      </ul>
      <div className="sidebarbutton">
        <p>Play movie quizes and earn free tickets</p>
        <span>50k people are playing now</span>
        <button>Start playing</button>
      </div>
      <div className="logout">
      <img src={logout} alt="" />
        <p>Log out</p>
      </div>
    </div>
  );
};

export default sideBar;
