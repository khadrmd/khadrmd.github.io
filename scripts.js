function namePrompt() {
  let name = prompt("What is your name?", "User");
  if (name == null) {
    name = "User";
  }
  let username = document.getElementById("username");
  username.innerText = name;
}

function submitForm() {}
