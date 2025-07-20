import React, { useState } from "react";
import SignUpForm from "./SignUpForm/SignUpForm";
import LoginForm from "./LoginForm/LoginForm";

const AuthPage = () => {
  const [formMode, setFormMode] = useState("signup");

  return (
    <div className="auth-page">
      {formMode === "signup" ? (
        <>
          <h2>Register</h2>
          <SignUpForm />
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setFormMode("login")}
              style={{ cursor: "pointer", color: "#9eff8e" }}
            >
              Log in
            </span>
          </p>
        </>
      ) : (
        <>
          <h2>Log In</h2>
          <LoginForm />
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setFormMode("signup")}
              style={{ cursor: "pointer", color: "#9eff8e" }}
            >
              Register
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;
