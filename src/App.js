import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Expiriance from "./components/Expiriance";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/expiriance" element={<Expiriance/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
