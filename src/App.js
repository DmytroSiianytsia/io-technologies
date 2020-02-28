import React, { Component } from 'react';
import './app.css';
import { Main } from "./components/Main/Main";
import WelcomeBack from "./components/WelcomBack/WelcomeBack";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  state = {
    email: '',
    password: '',
    isCorrectEmail: '',
    isCorrectPassword: '',
    toolTip: false
  };

  handleChange = (e) => {
    e.persist();
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value,
      toolTip: false
    }), () => {
      name === 'email'
        ?
        this.correctOrIncorrect(this.state.email.match(/.+@.+\..{2,}/), e)
        :
        this.correctOrIncorrect(this.state.password.match(/.{8,}/), e);
    });  
  };

  correctOrIncorrect = (boolean, e) => {
    const { value, name } = e.target;
    const field = (name === 'email') ? 'isCorrectEmail' : 'isCorrectPassword';

    if (value.length === 0) {
      this.setState({
        [field]: ''
      })
    } else if (boolean) {
      this.setState({
        [field]: 'correct'
      });
    } else {
      this.setState({
        [field]: 'incorrect'
      });
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
    const { isCorrectEmail, isCorrectPassword } = this.state;
    (isCorrectEmail === 'correct' && isCorrectPassword === 'correct')
      ?
      this.setState({ toolTip: false })
      :
      this.setState({ toolTip: true })
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
          <Main />
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
