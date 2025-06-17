import React from "react";
import { Link } from "react-router-dom";
import "../BookBtn/BookBtn.scss";

const BookBtn = () => {
  return (
    <Link className="book-btn" to="/trial">
      Book a trial session
    </Link>
  );
};

export default BookBtn;
