import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import classes from "./SortiesProccess.module.css";
import ReactGA from "react-ga";

const SortiesProccess = (props) => {
  const content = props.content.about;
  const history = useHistory();

  const levelsElement = content.levels.map((item) => (
    <div
      key={item.id}
      className={classes.sortiesCard}
    >
      <h4 className="cartTitle">{item.title}</h4>
      <p className="text">{item.text}</p>
    </div>
  ));

  const openQuiz = () => {
    ReactGA.event({
      category: "quiz",
      action: "modal opened",
      label: "1"
    })
    history.push(`/quiz`);

    props.setCourseUrl("quiz")
    props.setIsQuizOpen(true)
    props.setIsModalOpen(true)
  }

  return (
    <section className={classes["section-container"]}>
      <h3 className="sectionTitle">{content.title}</h3>
      {levelsElement}
      <div style={{color : "white"}}>
        <p className="cartTitle">טקסט על זה שיעשו בוחן לבדוק איזה קורס הכי מתאים להםם</p>
        <button onClick={() => openQuiz()} >לבוחן</button>
      </div>
      <div className={classes["stars-1"]}></div>
    </section>
  );
};

export default SortiesProccess;
