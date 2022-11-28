import React from "react";
import dispatchLink from "../../actions/actions";
import SocialLink from "../UI/SocialLink";
import classes from "./Opening.module.css";

const Opening = (props) => {
  const { title, subTitle, welcome, socialLinks } = props.content.opening;
  const splittedParagraphWelocme = welcome.split(";");

  const socialLinksElement = socialLinks.map((item) => (
    <SocialLink
      key={item.id}
      icon={item.iconLink}
      onClick={(event) =>
        dispatchLink(item.action, {
          event,
          value: item.actionValue,
        })
      }
    />
  ));

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
        <p className="text-no-padding">bsmch.alpha@ - כדי להישאר הכי מעודכנים</p>
        <div className={classes["links-flex"]}>{socialLinksElement}</div>
      </div>
      <div className={classes.welcomeSection}>
        <p className={classes.welcome}>{splittedParagraphWelocme[0]}</p>
        {/* <h2 className={classes.welcome}>{splittedParagraphWelocme[1]}</h2> */}
      </div>
    </div>
  );
};

export default Opening;
