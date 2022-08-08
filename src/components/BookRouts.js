import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "./Features";
import Book from "./Book";
import FeaturesId from "./FeaturesId";

function BookRouts() {
  return (
    <Routes>
      <Route index element={<Features />} />
      <Route path=":id" element={<Book />} />
      <Route path="1" element={<FeaturesId />} />
    </Routes>
  );
}

export default BookRouts;
