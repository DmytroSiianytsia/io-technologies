import React, {Component} from 'react';
import './welcomBack.css';
import {Link} from "react-router-dom";

class WelcomeBack extends Component {
    state = {
        email: '',
        password: '',
        isCorrectEmail: '',
        isCorrectPassword: '',
        isDisabledLogIn: true
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    correctOrIncorrect = (bool, e) => {
        const field = e.target.name === 'email' ? 'isCorrectEmail' : 'isCorrectPassword';
        if (bool) {
            this.setState({
                [field]: 'correct'
            })
        } else {
            this.setState({
                [field]: 'incorrect'
            })
        }
    };

    handleBlurEmail = (e) => {
        this.correctOrIncorrect(this.state.email.match(/.+@.+\..{2,}/), e);
    };

    handleBlurPassword = (e) => {
        this.correctOrIncorrect(this.state.password.match(/.{8,}/), e);
    };

    render() {
        const {email, password, isCorrectEmail, isCorrectPassword, isDisabledLogIn} = this.state;
        return (
            <div className="right-container">
                <div className="inner">
                    <h2 className="inner__title">Welcome back</h2>
                    <p className="inner__text">Sign in to continue to IO Technologies.</p>
                    <form className="inner__form" action="#">
                        <input
                            className="inner__email"
                            type="text"
                            placeholder="Your email"
                            name="email"
                            value={email}
                            onChange={e => this.handleChange(e)}
                            onBlur={e => this.handleBlurEmail(e)}
                        />
                        <div className={`underline ${isCorrectEmail}`}></div>
                        <input
                            className={`inner__password`}
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => this.handleChange(e)}
                            onBlur={e => this.handleBlurPassword(e)}
                        />
                        <div className={`underline ${isCorrectPassword}`}></div>
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
    }
}

export default WelcomeBack;
