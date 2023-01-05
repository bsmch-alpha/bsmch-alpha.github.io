import React, { useEffect } from "react";
import coursesContent from "../../../courses-content.json";
import classes from "./CoursesFullContent.module.css";
import CoursesFullGallary from "./CoursesFullGallary";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga";
import Modal from "../../UI/Modal";

const CoursesFullContent = (props) => {
  const { courseUrl, expandCourse, contractCourse, isCourseExpanded } = props;

  let selectedCourseName;

  const navigate = useNavigate();

  const content = Object.keys(coursesContent)
    .map((courseName) => {
      const element = coursesContent[courseName];
      if (element.urlKey === courseUrl) {
        selectedCourseName = courseName;
        return element;
      }
    })
    .find((element) => element !== undefined);

  const liElements =
    content &&
    content.aboutRole.map((item) => <li key={item.id}>{item.text}</li>);

  const exitModalClickHandler = () => {
    ReactGA.event({
      category: selectedCourseName,
      action: "modal closed",
      label: "2",
    });
    contractCourse();
  };

  useEffect(() => {
    if (isCourseExpanded) {
      setTimeout(() => {
        navigate();
      }, 300);
    }
  }, [isCourseExpanded]);

  return (
    <Modal
      contractCourse={contractCourse}
      isModalOpen={isCourseExpanded}
      expandCourse={expandCourse}
    >
      <div className={classes["courses-full-content-card"]}>
        <article className={classes["article-container"]}>
          {content && (
            <>
              <article>
                <div className={classes["brief"]}>
                  <h3 className="sectionTitle">{content.title}</h3>
                  <p className="text">{content.brief}</p>
                </div>
                <ul className={`text ${classes["about-role"]}`}>
                  {liElements}
                </ul>
              </article>
              <CoursesFullGallary content={content} />
            </>
          )}
          <span
            className={classes["close-btn"]}
            onClick={exitModalClickHandler}
          ></span>
          {!content && (
            <h1 className="cartTitle">
              מצטערים, לא הצלחנו למצוא את מה שאתם מחפשים.
            </h1>
          )}
        </article>
      </div>
    </Modal>
  );
};

export default CoursesFullContent;
