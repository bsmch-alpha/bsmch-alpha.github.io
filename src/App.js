import React, { useEffect, useState } from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";
import Footer from "./components/Layout/footer/Footer";
import Modal from "./components/UI/Modal";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import CookiesValidation from "./components/Layout/cookies-validation/CookiesValidation";
import PopupModal from "./components/UI/PopupModal";

const COKKIE_ENABLED = document.cookie;
// 2 - clean code
// 3 - Courses should be under path "/courses/:courseId"
// 4 - Add new Route with Switch so that the website will have cookies explaintion.
// 5 - Cookies modal opens with scrolling
// 6 - optimize
// 7 - release

const App = () => {
  const [courseUrl, setCourseUrl] = useState("");
  const [isCourseExpanded, setIsMegamaExpandedOpen] = useState(null);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname !== "/") {
      setIsMegamaExpandedOpen(true);
      setCourseUrl(pathname);
    } else {
      setIsMegamaExpandedOpen(false);
      setCourseUrl("/");
    }
  }, [pathname]);

  const megamaModalToFalse = () => {
    setIsMegamaExpandedOpen(false);
  };

  const expandCourse = () => {
    setIsMegamaExpandedOpen(true);
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
              <Modal
                modalToFalse={megamaModalToFalse}
                isModalOpen={isCourseExpanded}
                modalToTrue={expandCourse}
              >
                <CoursesFullContent
                  modalToFalse={megamaModalToFalse}
                  courseUrl={courseUrl}
                />
              </Modal>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1 className="title">שגיאה 404</h1>
              <p className="sectionTitle">
                נראה מפחיד? אל תדאגו, אנחנו פשוט לא הצלחנו למצוא את מה שחיפתם.
              </p>
              <p className="text">לחצו למטה כדי להגיע למקום מבטחים: </p>
              <Link to="">חזרה למקום מבטחים</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
