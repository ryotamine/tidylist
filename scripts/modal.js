"use strict";

// Get the button that opens the modal
const btn = document.getElementsByClassName("modal-button");

// All page modals
const modals = document.querySelectorAll(".modal");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    modals[i].style.display = "block";
  }
}

// When the users clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target.classList.contains("modal")) {
    for (let i in modals) {
      if (typeof modals[i].style !== "undefined") {
        modals[i].style.display = "none";
      }
    }
  }
}
