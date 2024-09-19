import React from "react";
import "./MembershipBtn.scss";

const MembershipBtn = ({ onClick, children }) => {
  return (
    <button className="membership-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default MembershipBtn;
