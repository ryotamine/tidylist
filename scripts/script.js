// Get the register modal
const registerModal = document.getElementById("registerModal");

// Get the register button that opens the modal
const registerBtn = document.getElementById("registerBtn");

// When the user clicks on the register button, open the modal
registerBtn.onclick = function() {
  registerModal.style.display = "block";
}

// When the user clicks anywhere outside of the register modal, close it
window.onclick = function(e) {
  if (e.target == registerModal) {
    registerModal.style.display = "none";
  }
}

// // Get the login modal
// const loginModal = document.getElementById("loginModal");

// // Get the login button that opens the modal
// const loginBtn = document.getElementById("loginBtn");

// // When the user clicks on the login button, open the modal
// loginBtn.onclick = function() {
//   loginModal.style.display = "block";
// }

// // When the user clicks anywhere outside of the login modal, close it
// window.onclick = function(e) {
//   if (e.target == loginModal) {
//     loginModal.style.display = "none";
//   }
// }

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
