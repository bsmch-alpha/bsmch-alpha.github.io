import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../SVG/Arrow";
import Card from "./Card";
import classes from "./GallaryCard.module.css";
import ReactGA from "react-ga";

const GallaryCard = (props) => {
  const { courseName, content, expandCourse } = props;

  const navigate = useNavigate();

  const cardImage = {
    opacity: content.courseImage ? 0.6 : 0.12,
  };

  const onClickHandle = () => {
    if (!content.text) return;
    ReactGA.event({
      category: courseName,
      action: "modal opened",
      label: "1",
    });
    navigate(`courses${courseName}`);
  };

  return (
    <div onClick={onClickHandle}>
      <Card className={classes["gallar-card-container"]}>
        <div className={classes["gallary-image--container"]}>
          <img
            className={classes["gallary-image"]}
            style={cardImage}
            src={`${
              process.env.PUBLIC_URL +
              `${
                content.courseImage
                  ? content.courseImage
                  : "./placeholderImage-3.svg"
              }`
            }`}
            alt="תמונה של המסלול"
            loading="lazy"
          ></img>
        </div>
        <h3 className={`cartTitle ${classes.h3}`}>{content.courseName}</h3>
        <div className={classes["text-area"]}>
          <p className={`text ${classes.text}`}>{content.text}</p>
        </div>
        {content.text && <Arrow className={classes.icon} />}
      </Card>
    </div>
  );
};

export default GallaryCard;
