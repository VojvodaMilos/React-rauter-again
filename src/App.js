import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Book from "./components/Book";
import FeaturesId from "./components/FeaturesId";
import NotFound from "./components/NotFound";

// LINK VIDEA : https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=19s

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Features" element={<Features />}>
          {/* <Route index element={<Features />} /> */}
          <Route path=":id" element={<Book />} />
          <Route path="1" element={<FeaturesId />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
