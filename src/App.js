import React, {Component} from 'react';
import './app.css';
import {Main} from "./components/main/Main";
import WelcomeBack from "./components/welcomBack/WelcomeBack";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
    state = {
        email: '',
        password: '',
        isCorrectEmail: '',
        isCorrectPassword: '',
        toolTip: false
    };

    handleChange = (e) => {
        e.target.name === 'email'
            ?
            this.correctOrIncorrect(this.state.email.match(/.+@.+\..{1,}/), e)
            :
            this.correctOrIncorrect(this.state.password.match(/\.{7,}/), e);

        this.setState({
            [e.target.name]: e.target.value,
            toolTip: false
        })
    };

    correctOrIncorrect = (boolean, e) => {
        const field = e.target.name === 'email' ? 'isCorrectEmail' : 'isCorrectPassword';

        if (e.target.value.length === 0) {
            this.setState({
                [field]: ''
            })
        } else if (boolean) {
            this.setState({
                [field]: 'correct'
            })
        } else {
            this.setState({
                [field]: 'incorrect'
            })
        }
    };

    logOut = () => {
        this.setState({
            email: '',
            password: '',
            isCorrectEmail: '',
            isCorrectPassword: ''
        })
    };

    toggleToolTip = () => {
        const {isCorrectEmail, isCorrectPassword} = this.state;
        (isCorrectEmail === 'correct' && isCorrectPassword === 'correct')
            ?
            this.setState({toolTip: false})
            :
            this.setState({toolTip: true})
    };

    render() {
        const {
            email,
            password,
            isCorrectEmail,
            isCorrectPassword,
            toolTip,
        } = this.state;
        return (
            <Router basename="/">
                <div className="app">
                    <Main/>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeBack
                                email={email}
                                password={password}
                                isCorrectEmail={isCorrectEmail}
                                isCorrectPassword={isCorrectPassword}
                                toolTip={toolTip}
                                handleChange={this.handleChange}
                                toggleToolTip={this.toggleToolTip}
                            />
                        </Route>
                        <Route path="/forgot">
                            <ForgotPassword
                                email={email}
                                isCorrectEmail={isCorrectEmail}
                                handleChange={this.handleChange}
                            />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard
                                email={email}
                                logOut={this.logOut}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
