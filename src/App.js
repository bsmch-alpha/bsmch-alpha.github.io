import React, { useEffect, useState } from "react";
import content from "./content.json";
import "./App.css";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import CookiesValidation from "./components/Layout/cookies-validation/CookiesValidation";
import PopupModal from "./components/UI/PopupModal";
import NotFound from "./pages/NotFound";

const COKKIE_ENABLED = document.cookie;
// 3 - Courses should be under path "/courses/:courseId"
// 4 - Add new Route with Switch so that the website will have cookies explaintion.
// 5 - Cookies modal opens with scrolling
// 6 - optimize
// 7 - release

const App = () => {
  const [courseUrl, setCourseUrl] = useState("");
  const [isCourseExpanded, setIsCourseExpanded] = useState(null);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname !== "/") {
      setIsCourseExpanded(true);
      setCourseUrl(pathname);
    } else {
      setIsCourseExpanded(false);
      setCourseUrl("/");
    }
  }, [pathname]);

  const contractCourse = () => {
    setIsCourseExpanded(false);
  };

  const expandCourse = () => {
    setIsCourseExpanded(true);
  };

  const closeCookieModal = ({ userAllowedCookies = false }) => {
    setIsCookieModalOpen(false);

    if (window.location.hostname === "localhost") {
      return;
    }

    if (COKKIE_ENABLED) {
      return;
    }

    if (userAllowedCookies) {
      const TRACKING_ID = "UA-250081981-1";
      ReactGA.initialize(TRACKING_ID);
      ReactGA.pageview(window.location.pathname);
      return;
    }
  };

  // console.clear();
  return (
    <div className="App overlay custom">
      {isCookieModalOpen && !COKKIE_ENABLED && (
        <PopupModal isCookieModalOpen={isCookieModalOpen}>
          <CookiesValidation
            cookieModalToFalse={closeCookieModal}
            content={content}
          />
        </PopupModal>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Info
              isCourseExpanded={isCourseExpanded}
              content={content}
              expandCourse={expandCourse}
              setCourseUrl={setCourseUrl}
            />
          }
        >
          <Route
            path="*"
            element={
              <CoursesFullContent
                isCourseExpanded={isCourseExpanded}
                expandCourse={expandCourse}
                contractCourse={contractCourse}
                courseUrl={courseUrl}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
