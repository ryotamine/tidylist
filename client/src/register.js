import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./App.css";

class Register extends Component {
  // Register constructor
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  // Register form helper function
  _handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // Render register popup
  render() {
    return (
      <Popup 
        open={true}
        closeOnDocumentClick
        onClose={this.props.closePopup}
      >
        <div>
          <a className="close" onClick={this.props.closePopup}>
            &times;
          </a>

          <form className="register-form">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="email-register"
              type="text"
              value={this.state.value}
              onBlur={this._handleChange}
              placeholder="Enter Email"
              id="email"
            >
            </input>

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="password-register"
              type="password"
              value={this.state.value}
              onBlur={this._handleChange}
              placeholder="Enter Password"
              id="password"
            >
            </input>

            <button
              className="submit-register"
              type="submit"
              value="submit"
            >
              Register
            </button>
          </form>
        </div>
      </Popup>
    );
  }
}

export default Register;
