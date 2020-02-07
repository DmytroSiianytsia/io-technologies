import React from 'react';
import './welcomBack.css';
import {Link} from "react-router-dom";
import BtnGradient from "../btn-gradient/BtnGradient";
import Logo from "../logo/Logo";
import { Btn } from "../btn/Btn";

export const WelcomeBack = props => {
    const {
        email,
        password,
        isCorrectEmail,
        isCorrectPassword,
        handleChange,
    } = props;

    return (
        <div className="right-container">
            <div className="inner">
                <div className="forSmartphone">
                    <Logo/>
                </div>
                <h1 className="inner__title">Welcome back</h1>
                <p className="inner__text">Sign in to continue to IO Technologies.</p>
                <form className="inner__form">
                    <input
                        className="inner__email"
                        type="text"
                        placeholder="Your email"
                        name="email"
                        value={email}
                        onChange={e => handleChange(e)}
                    />
                    <div className={`underline ${isCorrectEmail}`}></div>
                    <input
                        className={`inner__password`}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => handleChange(e)}
                    />
                    <div className={`underline ${isCorrectPassword}`}></div>
                    {
                        (isCorrectEmail === 'correct' && isCorrectPassword === 'correct')
                            ?
                            <Link to="/dashboard" className="link">
                                <BtnGradient text="LOG IN"/>
                            </Link>
                            :
                            <BtnGradient text="LOG IN"/>
                    }
                    <div className="inner__reset">
                        Forgot your password?
                        <Link to="/forgot" className="link">
                            <span className="inner__link">Reset</span>
                        </Link>
                    </div>
                </form>
                <div className="group-btn">
                    <Btn text="HELP CENTER"/>
                    <Btn text="SUPPORT"/>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBack;
