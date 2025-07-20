import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import SignUp from "../../static/images/sign-up-icon.svg";
import SignUpHover from "../../static/images/sign-up-icon-hover.svg";
import Cart from "../../static/images/cart-icon.svg";
import CartUp from "../../static/images/cart-icon-hover.svg";
import "./Header.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header container">
      <div className="header__nav-block">
        <Logo />
        <nav className="header__navigation">
          <ul className="header__list">
            <li>
              <Link
                to="#home"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("home");
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#benefits"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("benefits");
                }}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                to="#portfolio"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("portfolio");
                }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="#membership"
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("membership");
                }}
              >
                Membership
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__actions">
        <Link
          to="/signup"
          className="header__link header__action-link"
          onMouseEnter={() => setIsSignUpHovered(true)}
          onMouseLeave={() => setIsSignUpHovered(false)}
        >
          <img
            src={isSignUpHovered ? SignUpHover : SignUp}
            alt="Sign up icon"
          />
          <span>Sign Up</span>
        </Link>
        <Link to="/cart" className="header__link">
          <img
            src={isCartHovered ? CartUp : Cart}
            alt="Sign up icon"
            onMouseEnter={() => setIsCartHovered(true)}
            onMouseLeave={() => setIsCartHovered(false)}
          />
        </Link>
        <span className="header__link">+48 555 444 333</span>
      </div>
    </header>
  );
};

export default Header;
