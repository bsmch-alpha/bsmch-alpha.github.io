import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.css"
import quizContent from "../../../quiz-content.json"
import Arrow from "../../SVG/Arrow";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ReactGA, { set } from "react-ga";

const CoursesFullContent = (props) => {

  const questionObjects = quizContent.questions;
  const results = quizContent.results;

  const [questionNum, setQuestionNum] = useState(0);
  let questionNumber = 0;

  let quizResult = 0 ;
  const [result, setResult] = useState();
  const [resultText, setResultText] = useState();

  const [syber, setSyber] = useState(0);
  const [devops, setDevops] = useState(0);
  const [programming, setProgramming] = useState(0);
  const [data, setData] = useState(0);

  const upSyber = () => {setSyber(prev => prev + 1)}
  const upDevOps = () => {setDevops(prev => prev + 1)}
  const upProgramming = () => {setProgramming(prev => prev + 1)}
  const upData = () => {setData(prev => prev + 1)}

  const functionsArray = [upSyber, upDevOps, upProgramming, upData];

  const clickOnAnswer = (answer) => {
    setQuestionNum(prev => prev + 1);
    questionNumber = questionNum;
    functionsArray[answer]();
    (questionNumber + 1) === questionObjects.length && checkResult();
  }

  const checkResult = () => {
    if (syber >= devops && syber >= programming && syber >= data) {
      quizResult = 1;
    } else if (devops >= syber && devops >= programming && devops >= data) {
      quizResult = 2;
    } else if (programming >= syber && programming >= devops && programming >= data) {
      quizResult = 3;
    } else {
      quizResult = 4;
    }

    setResult(results[quizResult].result);
    setResultText(results[quizResult].text);
  }

  //Quiz Objects

  const createAnswers = (answers) => {

    let answerObjects = answers.map((answer, index) => (
      <div className={classes["answer"]} onClick={() => clickOnAnswer(index)}>{answer}</div>
    ))

    return answerObjects
  }

  const questionsArray = questionObjects.map((question, index) => (
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

  //

  return (
    <article className={classes["article-container"]}>
        <span
        className={classes["close-btn"]}
        onClick={exitModalClickHandler}
      ></span>
      {questionsArray[questionNum]}
      <div className={classes["result-container"]}>
        <div className={classes["result-title"]} >{result}</div>
        <div className={classes["result-text"]} >{resultText}</div>
      </div>
    </article>
  );
};

export default CoursesFullContent;
