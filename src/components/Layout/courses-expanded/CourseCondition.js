import React from "react";
import classes from "./CourseCondition.module.css";

const CourseCondition = (props) => {
  return (
    <div className={classes["option-card"]}>
      <header className={classes["condition-header"]}>{props.header}</header>
      <div className={classes["icon-info-container"]}>
        <img
          className={classes["condition-icon"]}
          src={props.imgUrl}
          loading="lazy"
          alt="conditionImage"
        />
        <ul className={classes["condition-info"]}>
          {props.extraInfo.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseCondition;
