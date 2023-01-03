import React from "react";
import classes from "./CookiesValidation.module.css";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

const CookiesValidation = (props) => {
  const { title, text } = props.content.cookies;
  const { linkText, urlKey } = props.content.cookies.link;

  return (
    <>
      <div className={classes["cookies-popup-container"]}>
        <h3 className={classes["cookies-title"]}>{title}</h3>
        <p className="text-white">
          {text}
          <Link>{linkText}</Link>
        </p>
        <div className={classes["cookies-btns-container"]}>
          <Button
            btnType="secondary"
            onClick={props.cookieModalToFalse.bind(null, {
              cookiesAccepted: false,
            })}
          >
            דחה עוגיות
          </Button>
          <Button
            btnType="primary"
            onClick={props.cookieModalToFalse.bind(null, {
              cookiesAccepted: true,
            })}
          >
            אפשר עוגיות
          </Button>
        </div>
      </div>
    </>
  );
};

export default CookiesValidation;
