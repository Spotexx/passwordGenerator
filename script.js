// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordLength = 0;
let isSybolsAllowed = false;
let isNumbersAllowed = false;


//sets the length of the password you would like to generate
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

//sets if the user would like to include symbols in their password
let setIsSymbolsAllowed = () => {
  isSybolsAllowed = confirm('Would you like to include symbols in your password?\n(Click "OK" for yes or "Cancel" for no)');
  return(isSybolsAllowed);
}

//sets if the user would like to include numbers in their password
let setIsNumbersAllowed = () => {
  isNumbersAllowed = confirm('Would you like to include numbers in your password?\n(Click "OK" for yes or "Cancel" for no)');
  return(isNumbersAllowed);
}

//pulls all of the functions together to generate the password
let generatePassword = () => {
  setPasswordLength();
  setIsSymbolsAllowed();

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);