import React from "react";
import SocialLink from "../UI/Button";
import classes from "./Opening.module.css";
import instagramIcon from "../../assests/instagram_icon.png";

const Opening = (props) => {
  const { title, subTitle, welcome, imgUrl, logoUrl } = props.content.opening;
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
      <div className={classes["social-links"]}>
        <p className="text-white">bsmch.alpha</p>
        <div className={classes['links-flex']}>
          <SocialLink icon={instagramIcon} />
          <SocialLink icon={instagramIcon} />
        </div>
      </div>
      <div className={classes.welcomeSection}>
        <p className={classes.welcome}>{splittedParagraphWelocme[0]}</p>
        {/* <h2 className={classes.welcome}>{splittedParagraphWelocme[1]}</h2> */}
      </div>
    </div>
  );
};

export default Opening;
