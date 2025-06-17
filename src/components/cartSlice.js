import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  discount: 0,
  appliedPromo: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.some(
        (item) => item.title === action.payload.title
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.discount = 0;
      state.appliedPromo = null;
    },
    applyPromoCode: (state, action) => {
      const promoCode = action.payload;

      if (promoCode === "PROMO123") {
        state.discount = 10;
        state.appliedPromo = promoCode;
      } else {
        alert("Invalid promo code");
      }
    },
  },
});

export const { addToCart, clearCart, applyPromoCode } = cartSlice.actions;
export default cartSlice.reducer;
