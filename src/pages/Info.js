import "./info.css";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Opening from "../components/Layout/Opening";
import SortiesProccess from "../components/Layout/sorties-proccess/SortiesProccess";
import Roles from "../components/Layout/roles/Roles";
import Footer from "../components/Layout/footer/Footer";

const Info = (props) => {
  const { content, setCourseUrl, expandCourse, isCourseExpanded } = props;

  const disableScrolling = () => {
    const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    const LeftScroll =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    };
  };

  const enableScrolling = () => {
    window.onscroll = () => {};
  };

  useEffect(() => {
    if (isCourseExpanded) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }, [isCourseExpanded]);

  return (
    <div className="info-page">
      <Outlet />
      <Opening content={content} />
      <main className="main-content" role="main">
        <SortiesProccess content={content} />
        {content.courses.map((courseContent, index) => (
          <Roles
            key={courseContent.id}
            index={index}
            content={courseContent}
            expandCourse={expandCourse}
            setCourseUrl={setCourseUrl}
          />
        ))}
      </main>
      <Footer content={content} />
    </div>
  );
};

export default Info;
