import React from "react";
import MembershipCard from "../MembershipCard/MembershipCard";
import "./Membership.scss";

const Membership = () => {
  return (
    <div id="membership" className="container">
      <h2 className="subtitle">Pick your plan</h2>
      <div className="membership__block">
        <MembershipCard />
      </div>
    </div>
  );
};

export default Membership;
