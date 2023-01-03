import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import classes from "./Modal.module.css";
import ReactGA from "react-ga";
import Overlay from "./Overlay";

const Modal = (props) => {
  const history = useHistory();

  const overlayClickHandler = () => {
    ReactGA.event({
      category: props.courseName,
      action: "modal closed",
      label: "2",
    });
    props.modalToFalse();
  };

  useEffect(() => {
    if (props.isModalOpen === false) {
      setTimeout(() => {
        history.push("/");
      }, 300);
    }
  }, [props.isModalOpen]);

  return (
    <div
      className={
        props.isModalOpen
          ? `${classes["modal-container"]}`
          : `${classes["modal-container-close"]}`
      }
    >
      <Overlay onClick={overlayClickHandler} />
      {props.children}
    </div>
  );
};

export default Modal;
