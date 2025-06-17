import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import TrialBooking from "./components/TrialBooking/TrialBooking";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />{" "}
          <Route path="cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/trial" element={<TrialBooking />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
