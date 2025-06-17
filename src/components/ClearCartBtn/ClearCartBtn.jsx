import React from "react";
import { clearCart } from "../../components/cartSlice";
import "./ClearCartBtn.scss";
import { useDispatch } from "react-redux";

const ClearCartBtn = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <button className="cart__clear-btn" onClick={handleClear}>
      Delete
    </button>
  );
};

export default ClearCartBtn;
