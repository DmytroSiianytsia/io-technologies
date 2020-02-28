import React from 'react';
import { Link } from "react-router-dom";
import './dashboard.css';
import BtnGradient from "../BtnGradient/BtnGradient";

function Dashboard({ email, logOut }) {
  const name = email.split('@')[0];
  const projects = ['Flirchi', 'io', 'company name', 'facenews.com', 'Flirchi', 'io', 'company name', 'facenews.com'];
  const listProjects = projects.map((project, index) => {
    return (
      <div key={index}>
        <div className="project">
          {project}
        </div>
        <div className="underline"></div>
      </div>
    )
  });
  return (
    <div className="right-container">
      <div className="inner align-center">
        <h2 className="inner__title">Hi, {name}!</h2>
        <p className="inner__text">Please choose your project.</p>
        <div className="frame">
          {listProjects}
        </div>
        <Link to="/" className="link">
          <BtnGradient text="LOG OUT" func={logOut} />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
