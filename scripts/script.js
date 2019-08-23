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
      modals[i].style.display = "none";
    }
  }
}

// Create a remove button and append it to each list item
const listItem = document.getElementsByTagName("li");
for (let i = 0; i < listItem.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  listItem[i].appendChild(span);
}

// Click on a remove button to delete the current list item
const remove = document.getElementsByClassName("remove");
for (let i = 0; i < remove.length; i++) {
  remove[i].onclick = () => {
    listItem[i].style.display = "none";
  }
}

// When the clicks on the add button, create a new list item
function newItem() {
  const li = document.createElement("li");
  const title = document.getElementById("title").value;
  const t = document.createTextNode(title);
  li.appendChild(t);
  if (title === "") {
    alert("Please write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("title").value = "";

  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = () => {
      listItem[i].style.display = "none";
    }
  }
}
