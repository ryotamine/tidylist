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

  // Register submission helper function
  _handleRegister = (e) => {
    e.preventDefault();
    this.setState({
      register: true
    });
    sessionStorage.setItem("email", this.state.email);

    if (this.state.register) {
      fetch("/register", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password
        })
      })
      .then(res => res.json());
    }
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
                onClick={this._handleRegister}
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
