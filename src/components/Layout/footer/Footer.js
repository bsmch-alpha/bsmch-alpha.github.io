import React from "react";
import classes from "./Footer.module.css";
import ReactGA from "react-ga";
import dispatchLink from "../../../actions/actions";

const Footer = (props) => {
  const contacts = props.content.footer.contacts;
  const text = props.content.footer.text;

  const contactElements = contacts.map((item) => (
    <div
      onClick={
        (event) =>
          dispatchLink(item.action, {
            event,
            value: item.actionValue,
          })
      }
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
