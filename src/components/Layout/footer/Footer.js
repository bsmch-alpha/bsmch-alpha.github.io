import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  const contacts = props.content.footer.contacts;
  const text = props.content.footer.text;

  const openInstagramLink = (event, value) => {
    event.preventDefault();
    window.open(value);
  };

  const callNumber = (event, value) => {
    event.preventDefault();
    window.open(`tel:${value}`);
  };

  const chooseAction = {
    phone: callNumber,
    link: openInstagramLink,
  };

  const contactElements = contacts.map((item) => (
    <div
      onClick={(event) => chooseAction[item.action](event, item.actionValue)}
      className={classes["contact-continaer"]}
      key={item.id}
    >
      <div className={classes[`${item.className}`]}></div>
      <p className={classes["links-text"]}>{item.text}</p>
    </div>
  ));

  return (
    <footer className={classes.footer}>
      <h3 className="cartTitle">{text}</h3>
      <div className={classes["social-container"]}>{contactElements}</div>
      <div className={classes["stars-1"]}></div>
    </footer>
  );
};

export default Footer;
