import React from "react";
import "./Portfolio.scss";
import SliderPortfolio from "../SliderPortfolio/SliderPortfolio";

const Portfolio = () => {
  return (
    <div id="portfolio" className=" portfolio">
      <div className="container">
        <h2 className="subtitle">Progress in every frame</h2>
      </div>
      <SliderPortfolio />
    </div>
  );
};

export default Portfolio;
