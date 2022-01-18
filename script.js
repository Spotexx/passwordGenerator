// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordLength = 0;
let isSybolsAllowed = false;
let isNumbersAllowed = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
