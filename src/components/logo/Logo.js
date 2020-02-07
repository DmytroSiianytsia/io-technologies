import React from 'react';
import './logo.css';

function Logo() {
    return (
        <div className="logo">
            <img
                className="logo__img"
                src={require("../../img/logo.png")}
                alt="Io technologies"
            />
            <div className="logo__text">Technologies</div>
        </div>
    );
}

export default Logo;
