import React from "react";
import "./App.css";
import Main from "./componets/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./componets/MovieDetail";

function App() {
  return (
    // <div className="app">
    //   <Banner/>
    //   <Main/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="movie/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
