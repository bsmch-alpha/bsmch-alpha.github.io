import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const params = useParams();

  const selectedCourseName = params[Object.keys(params)];

  const contractCourse = () => {
    handleExitAnimation({
      exitFunc: () => {
        ReactGA.event({
          category: selectedCourseName,
          action: "modal closed",
          label: "2",
        });
        navigate("/");
      },
    });
  };

  return (
    <div className={classes[animatedClassName]}>
      <CloseBtn onClick={contractCourse} />
      <Overlay onClick={contractCourse} />
      {props.children}
    </div>
  );
};

export default Modal;
