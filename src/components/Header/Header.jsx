import React from "react";
import SignUp from "../../static/images/sign-up-icon.svg";
import Cart from "../../static/images/cart-icon.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav-block">
        <Logo />
        <nav className="header__navigation">
          <ul className="header__list">
            <li>
              <a className="header__link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="header__link" href="#benefits">
                Benefits
              </a>
            </li>
            <li>
              <a className="header__link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="header__link" href="#membership">
                Membership
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__actions">
        <Link className="header__link header__action-link">
          <img src={SignUp} alt="Sign up icon" />
          <span>Sign Up</span>
        </Link>
        <Link className="header__link ">
          <img src={Cart} alt="Cart icon" />
        </Link>
        <Link className="header__link">+48 555 444 333</Link>
      </div>
    </header>
  );
};

export default Header;
