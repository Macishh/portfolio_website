import React, { Component } from "react";
import data from "../mydata";

class Header extends Component {
  render() {
    return (
      <div>
        <img
          className="header-logo"
          src={require("../img/marcus_axelsson_logo.png")}
          alt={data.name}
        ></img>
        <div className="start-page">
          <img
            className="start-page-marcus"
            src={require("../img/start_page_marcus.png")}
            alt={"Start page pic"}
          ></img>
          <h1 className="header-h1">
            Hi, my name is
            <br></br>
            Marcus Axelsson
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
