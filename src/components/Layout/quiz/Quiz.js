import React, { useEffect } from "react";
import classes from "./Quiz.module.css"
import Arrow from "../../SVG/Arrow";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ReactGA from "react-ga";

const CoursesFullContent = (props) => {
//   const history = useHistory();
//   const params = useParams()

//   const newUrl = params.courseId

//   const content = Object.keys(coursesContent).map((courseName) => {
//     const element = coursesContent[courseName];
//     if (element.urlKey === props.courseUrl) {
//       return element;
//     }
//   }).find(element => element !== undefined)

//   const liElements =
//     content &&
//     content.aboutRole.map((item) => <li key={item.id}>{item.text}</li>);

//   const exitModalClickHandler = () => {
//     ReactGA.event({
//       category: props.courseName,
//       action: "modal closed",
//       label: "2"
//     })
//     props.modalToFalse();
//   };

//   useEffect(() => {
//     if (!props.isModalOpen === false) {
//       setTimeout(() => {
//         history.push("/");
//       }, 300);
//     }
//   }, [props.isModalOpen]);

const exitModalClickHandler = () => {
    ReactGA.event({
      category: undefined,
      action: "modal closed",
      label: "2"
    })
    props.setIsModalOpen(false);
    props.setIsQuizOpen(false);
  };

  return (
    <article className={classes["article-container"]}>
        <span
        className={classes["close-btn"]}
        onClick={exitModalClickHandler}
      ></span>
      {/* {content && (
        <>
          {/* <iframe
            className={classes["article-image"]}
            src={content.videoUrl}
            loading="lazy"
          ></iframe> */}
          {/* <article>
            <div className={classes["brief"]}>
              <h3 className="sectionTitle">{content.title}</h3>
              <p className="text">{content.brief}</p>
            </div>
            <ul className={`text ${classes["about-role"]}`}>{liElements}</ul>
          </article>
          <CoursesFullGallary content={content} />
        </> */}
      {/* )}
      <span
        className={classes["close-btn"]}
        onClick={exitModalClickHandler}
      ></span>
      {!content && (
        <>
          <h1 className="cartTitle">
            מצטערים, לא הצלחנו למצוא את מה שאתם מחפשים.
          </h1> */}
          {/* <h3 className="cartTitle">אבל הנה שיר  שיררגיע אתכם: </h3>
          <iframe
            className={classes["article-image"]}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            loading="lazy"
          ></iframe>
          <div></div> */}
        {/* </>
      )} */} 
    </article>
  );
};

export default CoursesFullContent;
