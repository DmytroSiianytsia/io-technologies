import React from 'react';
import './main.css';

export const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="logo">
                    <img
                        className="logo__img"
                        src={require("../../img/logo.png")}
                        alt="logo"
                    />
                    <div className="logo__text">Technologies</div>
                </div>
                <div className="main__text">
                    Get how-to help and instructions or specific features in
                    <button className="main__btn-help">HELP CENTER</button>
                    or
                    <button className="main__btn-support">SUPPORT</button>
                </div>
            </div>
        </div>
    )
};