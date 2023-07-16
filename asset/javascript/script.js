// Assignment code here
var specialCharacters = [",","!","#","$","%","&","(",")","*","+",".","/",":",";","<","=",">","?","@"];
var lowerCase = [];
var upperCase = [];
var number = [0,1,2,3,4,5,6,7,8,9];
for (var i=97; i<123; i++) {
  lowerCase.push(String.fromCharCode(i));
}
for (var z=65; z<91; z++) {
  upperCase.push(String.fromCharCode(z));
}
var passLength= "";
var passArray = [];
var finalPass = "";

function getOne(value) {
  var pickIndex = Math.floor(Math.random()*value.length);
  var pickOne = value[pickIndex];
  return pickOne;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPass;
  //passwordText.value = password;
}

function generatePassword() {
  window.alert("Welcome to use the password generator! Please choose the criteria from the following:");

  length();
}

var length = function() {
  passLength = window.prompt("Please choose the password's length at least 8 to 128 charicters.");
  if (passLength >= 8 && passLength <=128) {
    window.alert("Next, the following are the components of a password character type.");

    characterType();
  } else {
    window.alert("The password length should be between 8 and 128. Plase try again.");

    length();
  }
}

var characterType = function() {
  // ask character types
  var characterTypeNum = [];
  var lowerEl = window.confirm("Does your password require lowercase letters?");
  var upperEl = window.confirm("Does your password require uppercase letters?");
  var numberEl = window.confirm("Does your password require numbers?");
  var specialEl = window.confirm("Does your password require special characters");

  characterTypeNum[0] = lowerEl;
  characterTypeNum[1] = upperEl;
  characterTypeNum[2] = numberEl;     
  characterTypeNum[3] = specialEl;

  // check types at least one
  var checktype = characterTypeNum.some(myFunction => myFunction == true);
  passArray = [];
  if (checktype !== true) {
    window.alert("You have to choose at least ONE type");

    characterType();
  } else {
    for (h=0; h<passLength; h++) {
      if (passArray.length < passLength) {
        if (lowerEl == true) {
          passArray.push(getOne(lowerCase));
        }
        if (upperEl == true) {
          passArray.push(getOne(upperCase));
        }
        if (numberEl == true) {
          passArray.push(getOne(number));
        }
        if (specialEl == true) {
          passArray.push(getOne(specialCharacters));
        }
      } else {
        break;
      }
    }
  }

  for (var i = passArray.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = passArray[i];
    passArray[i] = passArray[j];
    passArray[j] = temp;
  }  

  passArray.splice(passLength, passArray.length - passLength );

  combinePassword();
}

var combinePassword = function() {
  finalPass = '';
  for (var i=0; i<passArray.length; i++) {
    finalPass += passArray[i];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

