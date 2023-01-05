import React, { useRef } from "react";
import GallaryCard from "../../UI/GallaryCard";
import classes from "./Roles.module.css";

const Roles = (props) => {
  const { content, expandCourse, index } = props;
  const gallaryRef = useRef();

  const handleNextScroll = () => {
    gallaryRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const handleBackScroll = () => {
    gallaryRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const gallaryItemsElements = Object.keys(content.gallary).map((nodeName) => {
    const data = content.gallary[nodeName];
    return (
      <GallaryCard
        courseName={data.urlKey}
        content={data}
        key={data.id}
        expandCourse={expandCourse}
      />
    );
  });

  return (
    <section className={`${classes["roles-container"]}`}>
      <h3 className={`${"sectionTitle"} ${classes["section-title"]}`}>
        {content.title}
      </h3>
      <div className={classes["next-card"]} onClick={handleNextScroll}></div>
      <div className={classes["back-card"]} onClick={handleBackScroll}></div>
      <article className={classes["gallary"]} ref={gallaryRef}>
        <div className={classes["overfow-flex"]}>{gallaryItemsElements}</div>
      </article>
      <div
        className={
          (index + 1) % 2 === 0 ? classes["stars-1"] : classes["stars-1-right"]
        }
      ></div>
      <div
        className={
          index % 2 === 0
            ? classes["bg-rectangle"]
            : classes["bg-rectangle-right"]
        }
      ></div>
    </section>
  );
};

export default Roles;
