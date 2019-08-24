"use strict";

// Store list items in an array
function getList() {
  let list = [];
  let listStr = localStorage.getItem("item");
  if (listStr !== null) {
    list = JSON.parse(listStr);
  }
  return list;
}

// Add list item in an array
function add() {
  const title = document.getElementById("title").value;
  
  let list = getList();
  list.push(title);
  localStorage.setItem("item", JSON.stringify(list));
  document.getElementById("title").value = "";
  show();

  return false;
}

// Remove list item in an array
function remove() {
  let id = this.getAttribute("id");
  let list = getList();
  list.splice(id, 1);
  localStorage.setItem("item", JSON.stringify(list));

  show();

  return false;
}

// Show list item in browser
function show() {
  let list = getList();

  let html = "<ul>";
  for (let i = 0; i < list.length; i++) {
    html += `<li>${list[i]}<span class="remove" id="${i}">x</span></li>`;
  };
  html += "</ul>";

  document.getElementById("list").innerHTML = html;

  // Add a strike out text when clicking on a list item
  document.querySelector("ul").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  }, false);
  
  // Trigger remove function when clicking on a list item
  let x = document.getElementsByClassName("remove");
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", remove);
  };
}

// Maintain list items during refresh and logout
document.getElementById("add").addEventListener("click", add);
show();
