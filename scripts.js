function __init__() {
  namePrompt();
  initSlidingImg();
}

function namePrompt() {
  let name = prompt("What is your name?", "User");
  if (name == null) {
    name = "User";
  }
  document.getElementById("username").innerText = name;
  document.getElementById("form-name").value = name;
}

function submitForm() {
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

  return false;
}

function initSlidingImg() {
  images = document.getElementsByClassName("banner-img");
  for (i = 1; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

slideIndex = 0;
var images;

function nextImg(n) {
  if (slideIndex + n > images.length - 1) slideIndex = 0;
  else if (slideIndex + n < 0) slideIndex = images.length - 1;
  else slideIndex += n;
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[slideIndex].style.display = "block";
}

setInterval(function () {
  nextImg(1);
}, 5000);
