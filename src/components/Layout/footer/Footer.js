import React from "react";
import classes from "./Footer.module.css";
<<<<<<< HEAD
import ReactGA from "react-ga";
import dispatchLink from "../../../actions/actions";
||||||| parent of f647447 (Adding google analytics)
=======
import ReactGA from "react-ga";
>>>>>>> f647447 (Adding google analytics)

const Footer = (props) => {
  const contacts = props.content.footer.contacts;
  const text = props.content.footer.text;

<<<<<<< HEAD
||||||| parent of f647447 (Adding google analytics)
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

=======
  const openInstagramLink = (event, value) => {
    ReactGA.event({
      category: value,
      action: event,
      label: "3"
    })
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

>>>>>>> f647447 (Adding google analytics)
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
