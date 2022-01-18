// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordLength = 0;
let isSybolsAllowed = false;
let isNumbersAllowed = false;

let setPasswordLength = () => {
  passwordLength = prompt('Length\nHow many characters would you like your password to be?\n(type an integer between 8-128)');
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordLength = parseInt(passwordLength);
    return(passwordLength);
  } else {
    alert("Password length must be an integer between 8 and 128");
    setPasswordLength();
  }
}

let generatePassword = () => {
  setPasswordLength();

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);