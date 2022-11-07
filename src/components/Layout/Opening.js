import React from "react";
import classes from "./Opening.module.css";

const Opening = (props) => {
  const { title, subTitle, welcome, imgUrl, logoUrl } = props.content.opening;
  console.log(welcome);
  const splittedParagraphWelocme = welcome.split(";");

  return (
    <div className={classes["opening-container"]}>
      <header className={classes.header}>
        <div className={classes.logo}></div>
        <h1 className={`${"title"} ${classes["opening-title"]}`}>{title}</h1>
        <h3 className="subTitle">{subTitle}</h3>
      </header>
      <figure className={classes.figure}>
        <div className={classes.hero}></div>
      </figure>
      <div className={classes.welcomeSection}>
        <p className={classes.welcome}>{splittedParagraphWelocme[0]}</p>
        {/* <h2 className={classes.welcome}>{splittedParagraphWelocme[1]}</h2> */}
      </div>
    </div>
  );
};

export default Opening;
