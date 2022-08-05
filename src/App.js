import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Book from "./components/Book";

// LINK VIDEA : https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=19s

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Features/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
