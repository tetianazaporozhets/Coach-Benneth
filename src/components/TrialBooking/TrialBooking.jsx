import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../TrialBooking/TrialBooking.scss";

const TrialBooking = () => {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && name && email) {
      alert(
        `Thank you, ${name}! You've booked a trial on ${startDate.toLocaleString()}`
      );
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <form className="trial-booking" onSubmit={handleSubmit}>
      <h2>Book a Free Trial</h2>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Email:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Select a date and time:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Choose date & time"
      />

      <button type="submit">Book Trial</button>
    </form>
  );
};

export default TrialBooking;
