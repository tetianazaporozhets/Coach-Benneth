import React from "react";
import "./BenefitCard.scss";

const BenefitCard = ({ number, title, description }) => {
  return (
    <div className="benefit-card">
      <span className="benefit-card__number">{number}</span>
      <h3 className="benefit-card__title">{title}</h3>
      <p className="benefit-card__description">{description}</p>
    </div>
  );
};

export default BenefitCard;
