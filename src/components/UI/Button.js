import React from "react";
import classes from "./Button.module.css";

const SocialLink = (props) => {
  return <button className={classes.btn} style={{backgroundImage: `url('${props.icon}')`}}></button>;
};

export default SocialLink;
