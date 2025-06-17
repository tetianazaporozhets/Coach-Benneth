import React from "react";
import Icon from "../../static/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={Icon} alt="" />
    </Link>
  );
};

export default Logo;
