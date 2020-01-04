import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default class login extends Component {
  state = {
    name: "",
    password: "",
    login: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmite = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3070/user/login", this.state)
      .then(response => {
        console.log(response.data, "result...");
        if (response.data === "WELCOM") {
          this.setState({ login: true });
        }
      })
      .catch(err => {
        console.log(err, "Etudiant not added, try again");
      });
  };

  render() {
    return (
      <div>
        {this.state.login ? (
          <Redirect to="/GestionEtu" />
        ) : (
          <form
            className="container"
            style={{ width: "600px", border: "bold 10px", paddingTop: "100px" }}
            onSubmit={this.handleSubmite}
          >
            <div className="row">
              <div className="col">
                <input
                  name="name"
                  className="col"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                />
                <br></br>
                <input
                  name="password"
                  required
                  type="password"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                />
              </div>
            </div>

            <button
              style={{
                marginLeft: "200px",
                marginTop: "20px",
                fontWeight: "bold",
                width: "150px"
              }}
              className="btn btn-warning"
              type="submit"
            >
              {" "}
              Se connecter{" "}
            </button>
          </form>
        )}
      </div>
    );
  }
}
