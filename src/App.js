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
        showPage: 'hide'
    };

    handleChange = (e) => {
        e.target.name === 'email'
            ?
            this.correctOrIncorrect(this.state.email.match(/.+@.+\..{2,}/), e)
            :
            this.correctOrIncorrect(this.state.password.match(/.{8,}/), e);
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    correctOrIncorrect = (boolean, e) => {
        const field = e.target.name === 'email' ? 'isCorrectEmail' : 'isCorrectPassword';
        if (boolean) {
            this.setState({
                [field]: 'correct'
            })
        } else {
            this.setState({
                [field]: 'incorrect'
            })
        }
    };

    isShowPage = () => {
        this.setState(prevState => {
            return {
                showPage: prevState.showPage === 'hide' ? 'show' : 'hide'
            }
        })
    };

    render() {
        const {
            email,
            password,
            isCorrectEmail,
            isCorrectPassword,
            showPage
        } = this.state;
        return (
            <Router basename="/">
                <div className="app">
                    <Main showPage={showPage}/>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeBack
                                email={email}
                                password={password}
                                isCorrectEmail={isCorrectEmail}
                                isCorrectPassword={isCorrectPassword}
                                showPage={this.isShowPage}
                                handleChange={this.handleChange}
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
                            <Dashboard email={email}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
