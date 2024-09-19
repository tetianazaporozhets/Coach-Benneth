import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Layout как общий родительский компонент */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Главная страница */}
          <Route path="signup" element={<SignUp />} />{" "}
          {/* Страница регистрации */}
          <Route path="cart" element={<Cart />} /> {/* Страница корзины */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
