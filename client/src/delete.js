import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./App.css";

class Delete extends Component {
  // Render delete profile popup
  render() {
    return (
      <Popup 
        open={true}
        closeOnDocumentClick
        onClose={this.props.closePopup}
      >
        <div>
          <form className="delete-form">
            <div className="delete-background">
              <p className="delete-info">
                Are you sure that you want to delete your profile?
              </p>
            </div>
            <div>
              <button
                className="submit-delete"
                type="submit"
                value="submit"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </Popup>
    );
  }
}

export default Delete;
