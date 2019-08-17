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
          <form className="register-form">
            <div className="register-background">
              <div>
                <span className="fas fa-envelope icon-before" alt="Email">
                </span>
                <input
                  className="email-register"
                  type="email"
                  value={this.state.value}
                  onBlur={this._handleChange}
                  placeholder="Email"
                  id="email"
                >
                </input>
              </div>
              <div>
                <span className="fas fa-lock icon-before" alt="Password">
                </span>
                <input
                  className="password-register"
                  type="password"
                  value={this.state.value}
                  onBlur={this._handleChange}
                  placeholder="Password"
                  id="password"
                >
                </input>
              </div>
            </div>
            <div>
              <button
                className="submit-register"
                type="submit"
                value="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Popup>
    );
  }
}

export default Register;
