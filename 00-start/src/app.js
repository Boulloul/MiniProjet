import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import GestionEtu from "./components/gestion_etudiant";
import etu from "./components/listetudiant";
import login from "./components/Home/login";
import Navbar from "./components/Home/navbar";
import FormPage from "./components/AjouterEtudiant";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import navbar from "./components/Home/navbar";

class App extends Component {
  state = {
    isLogin: true
  };
  LoginStateControl = () => {};
  render() {
    return (
      <div>
        <Router>
          <Navbar islog={this.LoginStateControl} />
          <Switch>
            <Route exact path="/" component={Home} exact />
            <Route path="/GestionEtu" component={GestionEtu} exact />
            <Route path="/about" component={About} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/login" component={login} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
