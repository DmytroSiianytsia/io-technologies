import React from 'react';
import './welcomBack.css';
import { Link } from "react-router-dom";
import BtnGradient from "../BtnGradient/BtnGradient";
import Logo from "../Logo/Logo";
import { Btn } from "../Btn/Btn";

export const WelcomeBack = props => {
  const {
    email,
    password,
    isCorrectEmail,
    isCorrectPassword,
    handleChange,
    toolTip,
    toggleToolTip,
  } = props;

  return (
    <div className="right-container">
      <div className="inner">
        <div className="forSmartphone">
          <Logo />
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
                <BtnGradient text="LOG IN" />
              </Link>
              :
              <div className="wrong-field">
                {
                  toolTip
                    ?
                    <div className="toolTip">
                      fill both of field correctly (password min 8 chars)
                                        </div>
                    :
                    ''
                }
                <BtnGradient text="LOG IN" func={toggleToolTip} />
              </div>
          }
          <div className="inner__reset">
            Forgot your password?
                        <Link to="/forgot" className="link">
              <span className="inner__link">Reset</span>
            </Link>
          </div>
        </form>
        <div className="group-btn">
          <Btn text="HELP CENTER" />
          <Btn text="SUPPORT" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;
