import React, { useState } from "react";
import Modal from "react-modal";
import TrialBooking from "../TrialBooking/TrialBooking";
import "../TrialPopup/TrialPopup.scss";

const TrialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Book a Trial</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="trial-modal"
        overlayClassName="trial-overlay"
      >
        <button className="trial-modal__close" onClick={onClose}>
          ✖
        </button>
        <TrialBooking />
      </Modal>
    </div>
  );
};

export default TrialPopup;
