import React from 'react';
import {Link} from "react-router-dom";
import './dashboard.css';

function Dashboard(props) {
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
                <h2 className="inner__title">Hi, Nikita!</h2>
                <p className="inner__text">Please choose your project.</p>
                <div className="frame">
                    {listProjects}
                </div>
                <Link to="/" className="link">
                    <div className="inner__btn">
                        LOG OUT
                        <img
                            className="inner__arrow"
                            src={require('../../img/right-arrow.png')}
                            alt="log out"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
