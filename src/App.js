import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import FamilyDetails  from "./pages/FamilyDetails";
import NavBar from "./components/NavBar";
import FamilyForm from "./pages/FamilyForm";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/familydetails" element={<FamilyDetails/>}/>
      <Route path="/form" element={<FamilyForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
