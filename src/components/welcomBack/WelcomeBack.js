import React from 'react';
import './welcomBack.css';
import {Link} from "react-router-dom";

export const WelcomeBack = props => {
    const {
        email,
        password,
        isCorrectEmail,
        isCorrectPassword,
        showPage,
        handleChange,
    } = props;

    return (
        <div className="right-container">
            <div className="inner">
                <div className="menu-burger" onClick={showPage}>
                    <div className="menu-burger__item"></div>
                    <div className="menu-burger__item"></div>
                    <div className="menu-burger__item"></div>
                </div>
                <h2 className="inner__title">Welcome back</h2>
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
                        isCorrectEmail === 'correct' && isCorrectPassword === 'correct'
                            ?
                            <Link to="/dashboard" className="link">
                                <div className="inner__btn">
                                    LOG IN
                                    <img
                                        className="inner__arrow"
                                        src={require('../../img/right-arrow.png')}
                                        alt="log in"
                                    />
                                </div>
                            </Link>
                            :
                            <div className="inner__btn" title="fill the fields correctly">
                                LOG IN
                                <img
                                    className="inner__arrow"
                                    src={require('../../img/right-arrow.png')}
                                    alt="log in"
                                />
                            </div>
                    }
                    <div className="inner__reset">
                        Forgot your password?
                        <Link to="/forgot" className="link">
                            <span className="inner__link">Reset</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WelcomeBack;
