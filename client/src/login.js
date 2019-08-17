import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./App.css";

class Login extends Component {
  // Login constructor
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  // Login form helper function
  _handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // Render login popup
  render() {
    return (
      <Popup 
        open={true}
        closeOnDocumentClick
        onClose={this.props.closePopup}
      >
        <div>
          <form className="login-form">
            <div className="login-background">
              <div>
                <span className="fas fa-envelope icon-before" alt="Email">
                </span>
                <input
                  className="email-login"
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
                  className="password-login"
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
                className="submit-login"
                type="submit"
                value="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Popup>
    );
  }
}

export default Login;
