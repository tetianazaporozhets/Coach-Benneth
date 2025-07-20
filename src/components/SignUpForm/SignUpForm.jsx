import React from "react";
import { useForm } from "react-hook-form";
import "./SignUpForm.scss";
import SignUpBtn from "../SignUpBtn/SignUpBtn";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };
  const password = watch("password");
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your name"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="error__message">{errors.username.message}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email adress",
            },
          })}
        />
        {errors.email && (
          <p className="error__message">{errors.email.message}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="error__message">{errors.password.message}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="error__message">{errors.confirmPassword.message}</p>
        )}
      </div>
      <SignUpBtn />
    </form>
  );
};

export default SignUpForm;
