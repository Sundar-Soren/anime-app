import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeDetail from "./pages/animeDetail/AnimeDetail";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:animeId" element={<AnimeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
