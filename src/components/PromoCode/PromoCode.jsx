import React, { useState } from "react";
import "./PromoCode.scss";
import { useDispatch } from "react-redux";
import { applyPromoCode } from "../cartSlice";

const PromoCode = () => {
  const [promoCode, setPromoCode] = useState("");
  const dispatch = useDispatch();

  const handleApplyPromoCode = () => {
    if (promoCode) {
      dispatch(applyPromoCode(promoCode));
      setPromoCode("");
    } else {
      alert("Please enter a valid promo code");
    }
  };
  return (
    <div className="promo-code">
      <input
        className="promo-code__input"
        type="text"
        placeholder="Enter your promocode"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
      />
      <button className="promo-code__btn" onClick={handleApplyPromoCode}>
        Apply
      </button>
    </div>
  );
};

export default PromoCode;
