import React from 'react';
import './app.css';
import {Main} from "./components/main/Main";
import WelcomeBack from "./components/welcomBack/WelcomeBack";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    return (
        <Router basename="/">
            <div className="app">
                <Main/>
                <Switch>
                    <Route exact path="/" component={WelcomeBack}/>
                    <Route path="/forgot" component={ForgotPassword}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
