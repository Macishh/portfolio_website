import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-pic"
          src={require("../img/web_development.png")}
          alt={"Web_development.pic"}
        ></img>
        <h2 className="card-h2">Web development</h2>
        <p className="card-p">
          HTML5
          <br></br>
          CSS3
          <br></br>
          JavaScript
        </p>
      </div>
    );
  }
}

export default Card;
