import React, { useEffect } from "react";
import classes from "./CookiesValidation.module.css";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import useExitAnimation from "../../../hooks/use-exit-animation";

const CookiesValidation = (props) => {
  const { title, text } = props.content.cookies;
  const { linkText, urlKey } = props.content.cookies.link;
  const { animatedClassName, handleExitAnimation } = useExitAnimation({
    className: "cookies-popup-container",
    timeout: 1000,
  });

  const declineCookiesHandler = () => {
    handleExitAnimation({
      exitFunc: props.cookieModalToFalse.bind(null, {
        userAllowedCookies: false,
      }),
    });
  };

  const approveCookiesHandler = () => {
    handleExitAnimation({
      exitFunc: props.cookieModalToFalse.bind(null, {
        userAllowedCookies: true,
      }),
    });
  };

  return (
    <>
      <div className={classes[animatedClassName]}>
        <div className={classes["cookies-ui-container"]}>
          <div className={classes["cookies-text"]}>
            <h3 className={classes["cookies-title"]}>{title}</h3>
            <p className="text-white">
              {text}
              <Link to="cookies-policy" style={{ color: "var(--cta-color)" }}>
                {linkText}
              </Link>
            </p>
          </div>
          <div className={classes["cookies-btns-container"]}>
            <Button btnType="secondary" onClick={declineCookiesHandler}>
              דחיית Cookies
            </Button>
            <Button btnType="primary" onClick={approveCookiesHandler}>
              אישור
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesValidation;
