import React from "react";
import BookBtn from "../BookBtn/BookBtn";
import "./OptionHelp.scss";

const OptionHelp = () => {
  return (
    <div className=" option">
      <div className="container">
        <h2 className="option__subtitle">
          Unsure which option is right for you?
        </h2>
        <BookBtn />
      </div>
    </div>
  );
};

export default OptionHelp;
