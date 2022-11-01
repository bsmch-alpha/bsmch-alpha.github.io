import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const history = useHistory();

  const overlayClickHandler = () => {
    props.modalToFalse();
  };

  useEffect(() => {
    if (props.isModalOpen === false) {
      setTimeout(() => {
        history.push("/info");
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
      <div
        className={classes["modal-overlay"]}
        onClick={overlayClickHandler}
      ></div>
      <Card className={classes.card} style={props.style}>
        {props.children}
      </Card>
    </div>
  );
};

export default Modal;
