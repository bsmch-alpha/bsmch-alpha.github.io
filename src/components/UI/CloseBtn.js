import React from "react";
import classes from "./CloseBtn.module.css"

export const CloseBtn = (props) => {
  return (
    <span onClick={props.onClick} className={classes["close-btn"]}></span>
  );
};
