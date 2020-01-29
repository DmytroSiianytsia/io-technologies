import React from 'react';
import './forgotPassword.css';
import {Link} from "react-router-dom";

function ForgotPassword() {
    return (
        <div className="right-container">
            <div className="inner">
                <Link to="/">
                    <img
                        className="inner__arrow-back"
                        src={require("../../img/left-arrow.png")}
                        alt="Back"
                    />
                </Link>
                <form action="#" className="form inner__form">
                    <h2 className="inner__title margin-top100">
                        Forgot password?
                    </h2>
                    <input
                        className="inner__email margin-top40"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <div className={`underline`}></div>
                    <div className="inner__btn margin-top40">
                        SEND ME INSTRUCTIONS
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
