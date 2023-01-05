import "./App.css";
import React, { useState } from "react";
import content from "./content.json";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import CookiesValidation from "./components/Layout/cookies-validation/CookiesValidation";
import PopupModal from "./components/UI/PopupModal";
import NotFound from "./pages/NotFound";

// 4 - Add new Route with Switch so that the website will have cookies explaintion.
// 5 - Cookies modal opens with scrolling
// 6 - optimize
// 7 - release

const COKKIE_ENABLED = document.cookie;

const App = () => {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

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
        <Route path="/" element={<Info content={content} />}>
          <Route path="courses/*" element={<CoursesFullContent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
