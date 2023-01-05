import React, { useEffect } from "react";
import coursesContent from "../../../courses-content.json";
import classes from "./CoursesFullContent.module.css";
import CoursesFullGallary from "./CoursesFullGallary";
import { useNavigate, useParams } from "react-router-dom";
import ReactGA from "react-ga";
import Modal from "../../UI/Modal";

const CoursesFullContent = () => {
  const navigate = useNavigate();

  const params = useParams();

  const selectedCourseUrl = "/" + params[Object.keys(params)];
  let selectedCourseName;

  const content = Object.keys(coursesContent)
    .map((courseName) => {
      const element = coursesContent[courseName];
      if (element.urlKey === selectedCourseUrl) {
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
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <Modal
    // contractCourse={contractCourse}
    // isModalOpen={isCourseExpanded}
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
          {/* <span
            className={classes["close-btn"]}
            onClick={exitModalClickHandler}
          ></span> */}
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
