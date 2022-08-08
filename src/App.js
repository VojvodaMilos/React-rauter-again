import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Book from "./components/Book";
import FeaturesId from "./components/FeaturesId";
import NotFound from "./components/NotFound";
import BookRouts from "./components/BookRouts";
import "./components/style.css";

// LINK VIDEA : https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=19s

function App() {
  return (
    <>
      <Routes>
        <Route path="/Features" element={<h1>Extra Content</h1>} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Features/*" element={<BookRouts />} /> //zbog
        ugnjezdavanja Route stavimo /*
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
