import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import TikTok from "../../static/images/tik-tok-logo.svg";
import Instagram from "../../static/images/instagram-logo.svg";
import Youtube from "../../static/images/youtube-logo.svg";

const Footer = () => {
  console.log("Footer component rendered");
  return (
    <div className="footer container">
      <div className="footer__social">
        <Logo />
        <div className="footer__social-icons">
          <img src={TikTok} alt="TikTok logo" />
          <img src={Instagram} alt="Instagram logo" />
          <img src={Youtube} alt="Youtube logo" />
        </div>
      </div>
      <ul className="footer__links">
        <li className="footer__item">
          <a className="footer__link" href="#">
            FAQs
          </a>
        </li>
        <li>
          <a className="footer__link" href="#">
            Subscribe to Newsletter
          </a>
        </li>
        <li>
          <a className="footer__link" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="footer__link" href="#">
            Terms of Service
          </a>
        </li>
      </ul>
      <div className="footer__contacts-block">
        <p className="footer__contacts-adress">
          501 BEAN HILL RD NORTHFIELD NH 03276-4304 USA
        </p>
        <p className="footer__copyright">Copyright 2024 by CoachBenneth</p>
        <div className="footer__contacts">
          <p className="footer__name">Benneth Davis</p>
          <a className="footer__link" href="mailto:">
            coachbenneth@hello.com
          </a>
          <a className="footer__link" href="tel:++48 555 444 333">
            +48 555 444 333
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
