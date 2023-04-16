function namePrompt() {
  let name = prompt("What is your name?", "User");
  if (name == null) {
    name = "User";
  }
  document.getElementById("username").innerText = name;
  document.getElementById("form-name").value = name;
}

function submitForm(event) {
  event.preventDefault();
  var name = document.forms["form"]["form-name"].value;
  var birthdate = document.forms["form"]["form-birthdate"].value;
  var gender = document.forms["form"]["gender"].value;
  var pesan = document.forms["form"]["form-pesan"].value;

  if (pesan == "") pesan = "-";

  document.getElementById("res-time").innerText = Date();
  document.getElementById("res-name").innerText = name;
  document.getElementById("res-birthdate").innerText = birthdate;
  document.getElementById("res-gender").innerText = gender;
  document.getElementById("res-pesan").innerText = pesan;
}

function imageSlide(n) {}
