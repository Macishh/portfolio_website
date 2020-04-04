import React, { Component } from "react";
import data from "../mydata";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{data.name}</h1>
      </div>
    );
  }
}

export default Header;
