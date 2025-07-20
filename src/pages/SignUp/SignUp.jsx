import React from "react";
import "./SignUp.scss";
import AuthPage from "../../components/AuthPage";

const SignUp = () => {
  return (
    <div className="registration container">
      <h2 className="subtitle registration__subtitle">Welcome</h2>
      <AuthPage />
    </div>
  );
};

export default SignUp;
