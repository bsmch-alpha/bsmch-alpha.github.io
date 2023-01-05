import "./info.css";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Opening from "../components/Layout/Opening";
import SortiesProccess from "../components/Layout/sorties-proccess/SortiesProccess";
import Roles from "../components/Layout/roles/Roles";
import Footer from "../components/Layout/footer/Footer";

const Info = (props) => {
  const { content } = props;

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
          />
        ))}
      </main>
      <Footer content={content} />
    </div>
  );
};

export default Info;
