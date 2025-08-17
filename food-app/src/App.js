import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import About from "./pages/Home/About";
import Menu from "./pages/Home/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
