import React from "react";
import BenefitCard from "../BenefitCard/BenefitCard";
import "./Benefits.scss";
const benefits = [
  {
    number: "01.",
    title: (
      <>
        Personalized <span className="highlight">growth plans.</span>
      </>
    ),
    description: (
      <>
        I create customized fitness plans tailored to your{" "}
        <span className="highlight">unique goals</span> and challenges, ensuring
        you achieve <span className="highlight">maximum results</span> and
        maintain your progress<span className="highlight"> progress</span>.
      </>
    ),
  },
  {
    number: "02.",
    title: (
      <>
        Holistic <span className="highlight">development.</span>
      </>
    ),
    description: (
      <>
        I help you develop <span className="highlight">mental resilience</span>,
        provide <span className="highlight">nutritional guidance</span>, and
        offer lifestyle coaching to build a stronger
        <span className="highlight">stronger</span>, more balanced you.
      </>
    ),
  },
  {
    number: "03.",
    title: (
      <>
        <span className="highlight">Motivation</span> partner.
      </>
    ),
    description: (
      <>
        I’m not just your trainer, I’m your{" "}
        <span className="highlight">committed partner</span>, keeping you
        <span className="highlight">motivated</span> and{" "}
        <span className="highlight">accountable</span>, even when the journey
        gets tough.
      </>
    ),
  },
  {
    number: "04.",
    title: (
      <>
        <span className="highlight">Cutting-edge</span> techniques.
      </>
    ),
    description: (
      <>
        I leverage the latest <span className="highlight">advancements</span> in
        fitness science and technology to offer{" "}
        <span className="highlight">innovative strategies</span> that accelerate
        your performance.
      </>
    ),
  },
];

const Benefits = () => {
  return (
    <div id="benefits" className="container benefits">
      <h2 className="subtitle">Boost your performance</h2>
      <div className="benefits__list">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            number={benefit.number}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
