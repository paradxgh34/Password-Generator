// Assignment Code
var generateBtn = document.querySelector("#generate");
//Code
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function generatePassword(){ 
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  var password1 
  password1= ""
  for(var i=0; i<passwordLength; i++){
    password1 = password1 + alphabet [Math.floor(Math.random()*alphabet.length)]
  }
  return password1 
 } 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
