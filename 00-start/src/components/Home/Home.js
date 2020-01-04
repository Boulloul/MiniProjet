import React, { Component } from "react";
import about from "./about.jpg";
import Title from "./title";

export default class Home extends Component {
  render() {
    return (
      <div>
        <img
          className="img-rounded"
          src={about}
          style={{ width: "1500px", height: "450px" }}
        />
        <center>
          <div style={{ paddingBottom: "20%" }}>
            <h1 style={{ paddingTop: "2%", fontFamily: "cursive" }}>
              <span class="badge badge-secondary">Bienvenue à ESTE</span>
            </h1>
            <br></br>
            <Title
              titre="React app"
              desc="Mehdi Boulloul et khadija Abyade"
              prof="Mr.Gounane said"
            />
          </div>
        </center>
      </div>
    );
  }
}
