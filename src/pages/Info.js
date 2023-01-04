import React, { useEffect } from "react";
import "./info.css";

const Info = (props) => {
  const functionDisable = () => {
    const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    const LeftScroll =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    };
  };

  const functionEnable = () => {
    window.onscroll = () => {};
  };

  useEffect(() => {
    console.log(props.isModalOpen);
    if (props.isModalOpen) {
      functionDisable();
      return;
    }
    functionEnable();
  }, [props.isModalOpen]);

  return <div className="info-page">{props.children}</div>;
};

export default Info;
