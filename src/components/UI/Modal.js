import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import ReactGA from "react-ga";
import Overlay from "./Overlay";
import useExitAnimation from "../../hooks/use-exit-animation";
import { CloseBtn } from "./CloseBtn";

const Modal = (props) => {
  const { animatedClassName, handleExitAnimation } = useExitAnimation({
    timeout: 300,
    className: "modal-container",
  });

  const navigate = useNavigate();

  const contractCourse = () => {
    handleExitAnimation({
      exitFunc: () => {
        ReactGA.event({
          category: props.courseName,
          action: "modal closed",
          label: "2",
        });
        navigate("/");
      },
    });
  };

  console.log(animatedClassName);

  return (
    <div className={classes[animatedClassName]}>
      <CloseBtn onClick={contractCourse} />
      <Overlay onClick={contractCourse} />
      {props.children}
    </div>
  );
};

export default Modal;
