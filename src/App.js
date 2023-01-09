import "./App.css";
import React, { useState } from "react";
import content from "./content.json";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import NotFound from "./pages/NotFound";
import CookiesPolicies from "./pages/CookiesPolicies";

const COKKIE_ENABLED = document.cookie;

const activateReactGA = () => {
  if (window.location.hostname === "localhost") {
    return;
  }

  const TRACKING_ID = "UA-250081981-1";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);
};

if (COKKIE_ENABLED) {
  activateReactGA();
}

const App = () => {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

  const closeCookieModal = ({ userAllowedCookies = false }) => {
    setIsCookieModalOpen(false);

    if (COKKIE_ENABLED) {
      return;
    }

    if (userAllowedCookies) {
      activateReactGA();
    }
  };

  // console.clear();

  return (
    <div className="App overlay custom">
      <Routes>
        <Route
          path="/"
          element={
            <Info
              isCookieModalOpen={isCookieModalOpen}
              isCookieEnabled={COKKIE_ENABLED}
              closeCookieModal={closeCookieModal}
              content={content}
            />
          }
        >
          <Route path="/*" element={<CoursesFullContent />} />
        </Route>
        <Route path="cookies-policy" element={<CookiesPolicies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
