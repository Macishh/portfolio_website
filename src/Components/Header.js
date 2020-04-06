import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="start-page">
          <img
            className="start-page-marcus"
            src={require("../img/start_page_marcus.png")}
            alt={"Start page pic"}
          ></img>
          <h1 className="start-page-h1">
            <div className="greeting-start-page-h1">Hi, my name is</div>
            <div className="marcus-start-page-h1">Marcus</div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
