import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.scss";
import LoginBtn from "../LoginBtn/LoginBtn";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
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
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="error__message">{errors.password.message}</p>
        )}
      </div>

      <LoginBtn />
    </form>
  );
};

export default LoginForm;
