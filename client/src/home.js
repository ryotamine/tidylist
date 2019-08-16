import React, { Component } from "react";
import "./App.css";

class Home extends Component {
  // Register and login constructor
  constructor(props) {
    super(props);

    this.state = {
      openRegister: false,
      openLogin: false
    };
  }

  // Open register popup helper function
  _openRegisterPopup = () => {
    this.setState({ openRegister: true });
  }

  // Open login popup helper function
  _openLoginPopup = () => {
    this.setState({ openLogin: true });
  }

  // Close register and login popup helper function
  _closePopups = () => {
    this.setState({
      openRegister: false,
      openLogin: false
    });
  }

  // Render home page
  render() {
    return (
      <div className="home">
        <h1 className="title">TIDYLIST</h1>
        <span className="register" onClick={this._openRegisterPopup}>
          <i className="fas fa-user-plus fa-2x" alt="Register"></i>
        </span>
        <span className="login" onClick={this._openLoginPopup}>
          <i className="fas fa-sign-in-alt fa-2x" alt="Login"></i>
        </span>
        <a className="email" href="mailto:ryotamine@gmail.com">
          <i className="fas fa-envelope fa-2x" alt="Email"></i>
        </a>
      </div>
    );
  }
}

export default Home;
