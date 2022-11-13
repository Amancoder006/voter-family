import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import FamilyDetails  from "./pages/FamilyDetails";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/familydetails" element={<FamilyDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
