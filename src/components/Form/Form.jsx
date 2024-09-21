import React from "react";
import "./Form.scss";
import SignUpBtn from "../SignUpBtn/SignUpBtn";
const Form = () => {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="Enter your username"
        />
        {/* <p class="error__message">Username is required</p> */}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input"
          placeholder="Enter your email"
        />
        {/* <p class="error__message">Email is required</p> */}
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="Enter your password"
        />
        {/* <p class="error__message">Password is required</p> */}
      </div>

      <div className="field">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          className="input"
          placeholder="Confirm your password"
        />
        {/* <p class="error__message">Passwords must match</p> */}
      </div>

      <SignUpBtn />
    </form>
  );
};

export default Form;
