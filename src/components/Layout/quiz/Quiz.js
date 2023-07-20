import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.css"
import quizContent from "../../../quiz-content.json"
import Arrow from "../../SVG/Arrow";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ReactGA from "react-ga";

const CoursesFullContent = (props) => {

  const [questionNum, setQuestionNum] = useState(0)

  const clickOnAnswer = () => {
    setQuestionNum(prev => prev + 1)
  }

  const createAnswers = (answers) => {

    let answerObjects = answers.map((answer, index) => (
      <div className={classes["answer"]} onClick={() => clickOnAnswer()}>{answer}</div>
    ))

    return answerObjects
  }

  const questionsArray = quizContent.questions.map((question, index) => (
    <div className={classes["qustion-container"]} style={{color : "white"}}>
      <p className={classes["question-text"]}>{question.text}</p>
      <div className={classes["answers-container"]}>
        {createAnswers(question.answers)}
      </div>
    </div>
  ))

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
      {questionsArray[questionNum]}
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
