import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../TrialBooking/TrialBooking.scss";
import BookTrialBtn from "../BookTrialBtn/BookTrialBtn";

const TrialBooking = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    setSuccessMessage(
      `Thank you, ${
        data.name
      }! You've booked a trial on ${data.date.toLocaleString()}`
    );
    reset();
  };

  return (
    <form
      className="trial-booking__form container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Book a Free Trial</h2>

      <label>Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="error__message">{errors.name.message}</p>}

      <label htmlFor="email">Email:</label>
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
      {errors.email && <p className="error__message">{errors.email.message}</p>}

      <label>Select a date and time:</label>
      <Controller
        control={control}
        name="date"
        rules={{ required: "Date and time is required" }}
        render={({ field }) => (
          <DatePicker
            {...field}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Choose date & time"
          />
        )}
      />
      {errors.date && <p className="error__message">{errors.date.message}</p>}

      <BookTrialBtn />
      {successMessage && <p className="success__message">{successMessage}</p>}
    </form>
  );
};

export default TrialBooking;
