import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Members from "./components/Members";
import Photos from "./components/Photos";
import Research from "./components/Research";
import "./main.css";
import Publication from "./components/Publication";

function App() {
  const location = useLocation();

  // Determine which class to apply based on the route
  const appClass = location.pathname === "/publication/before-2017" ? "#DFCFBA" : "#dcdcdc";
  return (
    <div className="App" style={{backgroundColor: appClass}}>
      <Header />
      <div className="main">
        <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/research" element={<Research></Research>}></Route>
          <Route path="/publication/*" element={<Publication />} />
          <Route path="/member" element={<Members />} />

          <Route path="/photo" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
        <div className="layer"></div>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
