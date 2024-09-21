import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import PromoCode from "../../components/PromoCode/PromoCode";
import PaymentBtn from "../../components/PaymentBtn/PaymentBtn";
import { clearCart } from "../../components/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const discount = useSelector((state) => state.cart.discount);
  const appliedPromo = useSelector((state) => state.cart.appliedPromo);

  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  return (
    <div className="cart container">
      <h2 className="subtitle">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Ooops, looks like your cart is empty</p>
      ) : (
        <ul className="cart__list">
          {cartItems.map((item, index) => (
            <li className="cart__item" key={{ index }}>
              <div className="cart__product">
                <h3 className="cart__title">{item.title}</h3>
                <p className="cart__price">{item.price}</p>
                <p className="cart__description">{item.description}</p>
              </div>
              <div className="cart__border"></div>
            </li>
          ))}
          <div className="cart__payment">
            <PromoCode />
            <p className="cart__amount">Amount due:</p>
            <p className="cart__price">{discountedPrice.toFixed(2)}$</p>
            {appliedPromo && (
              <p className="cart__applied">
                Promo code applied: {appliedPromo} <br /> (Discount: {discount}
                %)
              </p>
            )}

            <PaymentBtn />
            <button onClick={() => dispatch(clearCart())}>
              Очистить корзину
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
