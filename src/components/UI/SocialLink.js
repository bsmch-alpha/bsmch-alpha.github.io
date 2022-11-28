import React from "react";
import classes from "./SocialLink.module.css";

const SocialLink = (props) => {
  return (
    <button
      className={classes.btn}
      style={{ backgroundImage: `url('${process.env.PUBLIC_URL + props.icon}')` }}
    ></button>
  );
};

export default SocialLink;
