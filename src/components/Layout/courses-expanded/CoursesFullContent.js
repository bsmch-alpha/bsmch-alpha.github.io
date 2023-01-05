import React, { useEffect } from "react";
import coursesContent from "../../../courses-content.json";
import classes from "./CoursesFullContent.module.css";
import CoursesFullGallary from "./CoursesFullGallary";
import { useNavigate, useParams } from "react-router-dom";
import ReactGA from "react-ga";
import Modal from "../../UI/Modal";
import {
  disableScrolling,
  enableScrolling,
} from "../../../actions/scrollingAllowedControl";

const CoursesFullContent = () => {
  const params = useParams();

  const selectedCourseUrl = "/" + params[Object.keys(params)];

  const content = Object.keys(coursesContent)
    .map((courseName) => {
      const element = coursesContent[courseName];
      if (element.urlKey === selectedCourseUrl) {
        return element;
      }
    })
    .find((element) => element !== undefined);

  let liElements;
  if (content) {
    liElements = content.aboutRole.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
  }

  useEffect(() => {
    disableScrolling();
    return () => {
      enableScrolling();
    };
  }, []);

  return (
    <Modal>
      <div className={classes["courses-full-content-card"]}>
        <article className={classes["article-container"]}>
          {content && (
            <>
              <article>
                <div className={classes["brief"]}>
                  <h3 className="sectionTitle">{content.title}</h3>
                  <p className="text">{content.brief}</p>
                </div>
                {content && (
                  <ul className={`text ${classes["about-role"]}`}>
                    {liElements}
                  </ul>
                )}
              </article>
              <CoursesFullGallary content={content} />
            </>
          )}
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
