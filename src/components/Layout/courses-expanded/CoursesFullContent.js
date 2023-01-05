import React, { useEffect } from "react";
import coursesContent from "../../../courses-content.json";
import classes from "./CoursesFullContent.module.css";
import CoursesFullGallary from "./CoursesFullGallary";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga";

const CoursesFullContent = (props) => {
  // const history = useHistory();
  const navigate = useNavigate();

  const content = Object.keys(coursesContent)
    .map((courseName) => {
      const element = coursesContent[courseName];
      if (element.urlKey === props.courseUrl) {
        return element;
      }
    })
    .find((element) => element !== undefined);

  const liElements =
    content &&
    content.aboutRole.map((item) => <li key={item.id}>{item.text}</li>);

  const exitModalClickHandler = () => {
    ReactGA.event({
      category: props.courseName,
      action: "modal closed",
      label: "2",
    });
    props.modalToFalse();
  };

  useEffect(() => {
    if (!props.isModalOpen === false) {
      setTimeout(() => {
        // history.push("/");
        navigate()
      }, 300);
    }
  }, [props.isModalOpen]);

  return (
    <div className={classes['courses-full-content-card']} style={{ marginTop: 90, borderRadius: 20 }}>
      <article className={classes["article-container"]}>
        {content && (
          <>
            <article>
              <div className={classes["brief"]}>
                <h3 className="sectionTitle">{content.title}</h3>
                <p className="text">{content.brief}</p>
              </div>
              <ul className={`text ${classes["about-role"]}`}>{liElements}</ul>
            </article>
            <CoursesFullGallary content={content} />
          </>
        )}
        <span
          className={classes["close-btn"]}
          onClick={exitModalClickHandler}
        ></span>
        {!content && (
          <>
            <h1 className="cartTitle">
              מצטערים, לא הצלחנו למצוא את מה שאתם מחפשים.
            </h1>
          </>
        )}
      </article>
    </div>
  );
};

export default CoursesFullContent;
