import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Benefits from "./components/Benefits/Benefits";
import Portfolio from "./components/Portfolio/Portfolio";
import Membership from "./components/Membership/Membership";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="membership" element={<Membership />} />
      </Routes>
    </div>
  );
}

export default App;
