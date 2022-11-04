import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Services from "./Component/Services";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/project"  element={<Projects/>}/>
        <Route path="service"  element={<Services/>}/>
    
      </Routes>
    </BrowserRouter>
  )
}

export default Router