const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthLabel = document.getElementById("lengthLabel");

function updateLength() {
  lengthLabel.textContent = lengthSlider.value;
}

function generatePassword() {
  const length = Number(lengthSlider.value);

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers   = "0123456789";
  const symbols   = "!@#$%^&*()_+=-{}[]|:;<>,.?/";

  let allowed = "";

  if (document.getElementById("uppercase").checked) allowed += uppercase;
  if (document.getElementById("lowercase").checked) allowed += lowercase;
  if (document.getElementById("numbers").checked)   allowed += numbers;
  if (document.getElementById("symbols").checked)   allowed += symbols;

  if (allowed === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allowed[Math.floor(Math.random() * allowed.length)];
  }

  passwordField.value = password;
}

function copyPassword() {
  navigator.clipboard.writeText(passwordField.value);
  alert("Copied!");
}
