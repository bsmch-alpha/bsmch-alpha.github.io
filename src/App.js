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
import { Link, Route, Switch, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import CookiesValidation from "./components/Layout/cookies-validation/CookiesValidation";
import PopupModal from "./components/UI/PopupModal";

const COKKIE_ENABLED = document.cookie;

const App = () => {
  const location = useLocation();
  const [courseUrl, setCourseUrl] = useState("");
  const [isMegamaExpandedOpen, setIsMegamaExpandedOpen] = useState(null);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);
  const { pathname } = location;

  useEffect(() => {
    const newUrl = Array(...pathname)
      .filter((letter, index) => index > 0 && letter !== "/")
      .join("");

    if (newUrl !== "") {
      setIsMegamaExpandedOpen(true);
      setCourseUrl(newUrl);
    } else {
      setIsMegamaExpandedOpen(false);
      setCourseUrl("");
    }
  }, [pathname]);

  const megamaModalToFalse = () => {
    setIsMegamaExpandedOpen(false);
  };

  const megamaModalToTrue = () => {
    setIsMegamaExpandedOpen(true);
  };

  const cookieModalToFalse = ({ cookiesAccepted = false }) => {
    setIsCookieModalOpen(false);

    if (window.location.hostname === "localhost") {
      return;
    }

    if (COKKIE_ENABLED) {
      return;
    }

    if (cookiesAccepted) {
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
            cookieModalToFalse={cookieModalToFalse}
            content={content}
          />
        </PopupModal>
      )}
      <Info isModalOpen={isMegamaExpandedOpen}>
        <Route path={`/:courseId`}>
          <Modal
            modalToFalse={megamaModalToFalse}
            isModalOpen={isMegamaExpandedOpen}
            modalToTrue={megamaModalToTrue}
          >
            <CoursesFullContent
              modalToFalse={megamaModalToFalse}
              courseUrl={courseUrl}
            />
          </Modal>
        </Route>
        <Switch>
          <Route path={`/`}>
            <Opening content={content} />
            <main className="main-content" role="main">
              <SortiesProccess content={content} />
              {content.courses.map((courseContent, index) => (
                <Roles
                  key={courseContent.id}
                  index={index}
                  content={courseContent}
                  modalToTrue={megamaModalToTrue}
                  setCourseUrl={setCourseUrl}
                />
              ))}
            </main>
            <Footer content={content} />
          </Route>
          <Route path="*">
            <div>
              <h1 className="title">שגיאה 404</h1>
              <p className="sectionTitle">
                נראה מפחיד? אל תדאגו, אנחנו פשוט לא הצלחנו למצוא את מה שחיפתם.
              </p>
              <p className="text">לחצו למטה כדי להגיע למקום מבטחים: </p>
              <Link to="">חזרה למקום מבטחים</Link>
            </div>
          </Route>
        </Switch>
      </Info>
    </div>
  );
};

export default App;
