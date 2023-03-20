import React from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import { Route, Routes } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainContent;
