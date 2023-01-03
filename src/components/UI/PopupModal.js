import React, { useState } from "react";
import Overlay from "./Overlay";
import classes from "./PopupModal.module.css";

const PopupModal = (props) => {
  return (
    <div
      className={
        props.isCookieModalOpen
          ? `${classes["popup-modal-container"]}`
          : `${classes["popup-container-close"]}`
      }
    >
      <Overlay />
      {props.children}
    </div>
  );
};
export default PopupModal;
