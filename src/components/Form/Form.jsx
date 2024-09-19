import React from "react";
import "./Form.scss";
const Form = () => {
  return (
    <form class="form">
      <div class="field">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="input"
          placeholder="Enter your username"
        />
        {/* <p class="error__message">Username is required</p> */}
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="input"
          placeholder="Enter your email"
        />
        {/* <p class="error__message">Email is required</p> */}
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="input"
          placeholder="Enter your password"
        />
        {/* <p class="error__message">Password is required</p> */}
      </div>

      <div class="field">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          class="input"
          placeholder="Confirm your password"
        />
        {/* <p class="error__message">Passwords must match</p> */}
      </div>

      <button type="submit" class="input">
        Submit
      </button>
    </form>
  );
};

export default Form;
