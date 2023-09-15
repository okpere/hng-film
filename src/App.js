import React from "react";
import "./App.css";
import Main from "./componets/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./componets/MovieDetail";
import SideBar from "./componets/SideBar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SideBar" element={<SideBar/>} />
        <Route path="movie/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
