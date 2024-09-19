import React from "react";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Benefits from "../components/Benefits/Benefits";
import Portfolio from "../components/Portfolio/Portfolio";
import Membership from "../components/Membership/Membership";
import OptionHelp from "../components/OptionHelp/OptionHelp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.state]);
  return (
    <div>
      <HomeScreen id="home" />
      <Benefits id="benefits" />
      <Portfolio id="portfolio" />
      <Membership id="membership" />
      <OptionHelp />
    </div>
  );
};

export default Home;
