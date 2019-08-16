import React, { Component } from "react";
import "./App.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="title">TIDYLIST</h1>
        <i className="fas fa-user-plus fa-2x" alt="Register"></i>
        <i className="fas fa-sign-in-alt fa-2x" alt="Login"></i>
        <i className="fas fa-envelope fa-2x" alt="Email"></i>
      </div>
    );
  }
}

export default Home;
