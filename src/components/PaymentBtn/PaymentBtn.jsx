import React from "react";
import "./PaymentBtn.scss";
import { Link } from "react-router-dom";

const PaymentBtn = () => {
  return (
    <Link className="payment" to="/checkout">
      Go to payment
    </Link>
  );
};

export default PaymentBtn;
