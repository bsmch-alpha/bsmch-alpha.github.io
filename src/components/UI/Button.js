import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const className = {
    primary: classes["btn-primary"],
    secondary: classes["btn-secondary"],
  };

  return (
    <button className={className[props.btnType]} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;
