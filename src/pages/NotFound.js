import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="title">שגיאה 404</h1>
      <p className="sectionTitle">
        נראה מפחיד? אל תדאגו, אנחנו פשוט לא הצלחנו למצוא את מה שחיפתם.
      </p>
      <p className="text">לחצו למטה כדי להגיע למקום מבטחים: </p>
      <Link to="/">חזרה למקום מבטחים</Link>
    </div>
  );
};

export default NotFound;
