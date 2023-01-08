import React, { Fragment } from "react";
import Arrow from "../components/SVG/Arrow";
import cookiesPolicyContent from "./cookies-policy-content.json";
import classes from "./CookiesPolicies.module.css";

const CookiesPolicies = () => {
  const allParagraphs = cookiesPolicyContent.main.map((item) => (
    <Fragment key={item.id}>
      <h3 className="sectionTitle">{item.title}</h3>
      {item.article.map((item) => (
        <p key={item.id} className="text-no-padding">
          {item.text}
        </p>
      ))}
    </Fragment>
  ));

  console.log(allParagraphs);

  return (
    <main className={classes["cookies-policy-container"]}>
      <nav>
        <ul className={classes["cookies-nav-container"]}>
          <li>
            <Arrow className={classes["arrow-back"]} />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + cookiesPolicyContent.logo} />
          </li>
        </ul>
      </nav>
      <section>{allParagraphs}</section>
    </main>
  );
};

export default CookiesPolicies;
