import React from "react";
import MembershipBtn from "../MembershipBtn/MembershipBtn";
import "./MembershipCard.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";

const MembershipCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subscriptions = [
    {
      title: "One-time pass",
      price: "19,99$",
      description: "Pay once and enjoy a full day of training.",
      benefits: [
        "24-Hour Gym Access: Access the gym anytime for a full day.",
        "No Commitment: Train for a day, no strings attached.",
        "Flexible Option: Ideal for busy schedules or trying out personal training.",
      ],
      buttonText: "Buy this pass",
    },
    {
      title: "Flexible Subscription",
      price: "59,99$",
      description: "Pay monthly with a flexible subscription.",
      benefits: [
        "Unlimited Access: Enjoy 24/7 gym access with no expiration date.",
        "Support: Maintain consistent progress.",
        "Flexible Commitment: Cancel anytime without losing your training history.",
      ],
      buttonText: "Buy this pass",
    },
    {
      title: "6-month membership",
      price: "299$",
      description: "Enjoy the benefits for 6 months.",
      benefits: [
        "Unlimited Access: Train at any time with unlimited gym access.",
        "Consistent Progress: Regular training sessions.",
        "Flexible Option: Ideal for busy schedules or trying out personal training.",
      ],
      buttonText: "Buy this pass",
    },
  ];

  const handleAddToCart = (subscription) => {
    dispatch(addToCart(subscription));
    navigate("/cart");
  };

  return (
    <div className="membership-card">
      {subscriptions.map((subscription, index) => (
        <div key={index} className="membership-card__card">
          <h3 className="membership-card__subtitle">{subscription.title}</h3>
          <div className="membership-card__price-box">
            <span className="membership-card__price">{subscription.price}</span>
            <p className="membership-card__description">
              {subscription.description}
            </p>
          </div>
          <ul className="membership-card__list">
            {subscription.benefits.map((benefit, idx) => {
              const [title, description] = benefit.split(": ");
              return (
                <li key={idx} className="membership-card__item">
                  <span className="highlight">{title}:</span> {description}
                </li>
              );
            })}
          </ul>
          <MembershipBtn onClick={() => handleAddToCart(subscription)}>
            {subscription.buttonText}
          </MembershipBtn>
        </div>
      ))}
    </div>
  );
};

export default MembershipCard;
