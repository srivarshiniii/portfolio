import React from "react";
import "./index.css";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/skills" element={<Skills />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
