import React from "react";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Benefits from "../components/Benefits/Benefits";
import Portfolio from "../components/Portfolio/Portfolio";
import Membership from "../components/Membership/Membership";
import OptionHelp from "../components/OptionHelp/OptionHelp";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeScreen />
      <Benefits />
      <Portfolio />
      <Membership />
      <OptionHelp />
      <Footer />
    </div>
  );
};

export default Home;
