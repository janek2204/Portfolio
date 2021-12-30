import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Expiriance from "./components/Expiriance";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
import ProjectFour from "./components/ProjectFour";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/expiriance" element={<Expiriance/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/projectOne" element={<ProjectOne/>}/>
        <Route path="/projectTwo" element={<ProjectTwo/>}/>
        <Route path="/projectThree" element={<ProjectThree/>}/>
        <Route path="/projectFour" element={<ProjectFour/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
