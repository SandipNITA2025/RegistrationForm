import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {

  const [loading, setLoading]= useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(() => {
      spinner.style.display= "none";
      setLoading(false);
    }, 1500);
  }

  return (
    !loading && (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    )
  );
};

export default App;
