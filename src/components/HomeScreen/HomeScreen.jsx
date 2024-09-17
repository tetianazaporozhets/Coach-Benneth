import React from "react";
import Header from "../Header/Header";
import "../HomeScreen/HomeScreen.scss";
import Trainer from "../../static/images/trainer.png";
import BookBtn from "../BookBtn/BookBtn";

const HomeScreen = () => {
  return (
    <div id="home" className="homescreen">
      <div className="container ">
        <Header />

        <h1 className="homescreen__title">
          Your Personal <br /> Path
        </h1>
        <div className="homescreen__content">
          <p className="homescreen__promo-text">
            "As your personal trainer, I'll guide you with customized workouts
            and motivation to reach your fitness goals."
          </p>
          <p className="homescreen__promo-offer">
            Get your first training for free
          </p>
          <BookBtn />
        </div>
        <img
          src={Trainer}
          alt="Cut-out person"
          className="homescreen__trainer"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
