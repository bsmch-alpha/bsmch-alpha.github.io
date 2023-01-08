import React, { Fragment } from "react";
import CourseCondition from "./CourseCondition";
import classes from "./CoursesFullGallary.module.css";
import condition1 from "../../../assests/SVG/condition-svg/condition1.svg";
import condition2 from "../../../assests/SVG/condition-svg/condition2.svg";
import condition3 from "../../../assests/SVG/condition-svg/condition3.svg";

const conditionArray = [condition1, condition2, condition3];

const CoursesFullGallary = (props) => {
  const content = props.content.conditions;

  const cards = content.map((item, index) => (
    <Fragment key={item.id}>
      {item.extraInfo && (
        <CourseCondition
          header={item.header}
          imgUrl={conditionArray[index]}
          extraInfo={item.extraInfo}
        />
      )}
    </Fragment>
  ));

  return (
    <div className={classes["option-footer"]}>
      <div className={classes["condition-container"]}>{cards}</div>
    </div>
  );
};

export default CoursesFullGallary;
