import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import About from "../About/About";
import Home from "../Home/Home";
import GestionEtu from "../gestion_etudiant";
import etu from "../listetudiant";
import login from "../Home/login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <Link to={"/home"} className="navbar-brand">
              ESTE
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                  <Link to={"/home"} className="nav-link">
                    {" "}
                    Accueil{" "}
                  </Link>
                </li>
                <li>
                  <Link to={""} className="nav-link">
                    Formation
                  </Link>
                </li>
                <li>
                  <Link to={""} className="nav-link">
                    Scolarité
                  </Link>
                </li>

                
              </ul>
            </div>
            <form className="form-inline">
              <Link to="/login" className="btn btn-outline-dark" onClick={this.props.islog}>
                Connexion
              </Link>
            </form>
          </nav>
    
        </div>
    );
  }
}
