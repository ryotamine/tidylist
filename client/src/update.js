import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./App.css";

class Update extends Component {
  // Update profile constructor
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  // Update profile form helper function
  _handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // Render update profile popup
  render() {
    return (
      <Popup 
        open={true}
        closeOnDocumentClick
        onClose={this.props.closePopup}
      >
        <div>
          <form className="update-form">
            <div className="update-background">
              <div>
                <span className="fas fa-envelope icon-before" alt="Email">
                </span>
                <input
                  className="email-update"
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
                  className="password-update"
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
                className="submit-update"
                type="submit"
                value="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Popup>
    );
  }
}

export default Update;
