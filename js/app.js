var home = document.getElementById("home");
var contact = document.getElementById("contact");

function showContact() {
  home.style.display = "none";
  contact.style.display = "block";
}

function showHome() {
  home.style.display = "block";
  contact.style.display = "none";
}
