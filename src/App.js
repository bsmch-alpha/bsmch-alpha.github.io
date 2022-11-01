import React, { useState } from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";
import Footer from "./components/Layout/footer/Footer";
import Modal from "./components/UI/Modal";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";
import { Redirect, Route, useRouteMatch } from "react-router-dom";

const App = () => {
  const { url, path } = useRouteMatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseUrl, setCourseUrl] = useState("");

  const modalToFalse = () => {
    setIsModalOpen(false);
  };

  const modalToTrue = () => {
    setIsModalOpen(true);
  };


  // console.clear();
  return (
    <div className="App overlay custom">
      <Info isModalOpen={isModalOpen}>
        <Route path='/' exact>
          <Redirect to='/info'/>
        </Route>
        <Route path={`/info/:courseId`}>
          <Modal
            modalToFalse={modalToFalse}
            isModalOpen={isModalOpen}
            style={{ marginTop: 90, borderRadius: 20 }}
            modalToTrue={modalToTrue}
          >
            <CoursesFullContent
              modalToFalse={modalToFalse}
              courseUrl={courseUrl}
            />
          </Modal>
        </Route>
        <Route path={`/info`}>
          <Opening content={content} />
          <main className="main-content" role="main">
            <SortiesProccess content={content} />
            {content.courses.map((courseContent, index) => (
              <Roles
                key={courseContent.id}
                index={index}
                content={courseContent}
                modalToTrue={modalToTrue}
                setCourseUrl={setCourseUrl}
              />
            ))}
          </main>
          <Footer content={content} />
        </Route>
      </Info>
    </div>
  );
};

export default App;
