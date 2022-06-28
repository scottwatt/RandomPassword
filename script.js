// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTRUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+=[]{};:'\"`~<,>.?\|";
var passwordLength;
var wantLowerCase;
var wantUpperCase;
var wantNumber;
var wantSpecialChar;
var choosenChar;


// Write password to the #password input
function determineLength(){
  passwordLength = prompt("Please choose password length (8-128 characters):");
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Password length must be between 8 and 128 characters");
    determineLength();
  }
}
// User selection
function chooseCharacters(){
  choosenChar = "";
  wantLowerCase = confirm("Do you want lowercase letters?");
  wantUpperCase = confirm("Do you want uppercase letters?");
  wantNumber = confirm("Do you want numbers?");
  wantSpecialChar = confirm("Do you want special characters?");
  if(!wantLowerCase && !wantUpperCase && !wantNumber && !wantSpecialChar){
    alert("Please choose at least one option.");
    chooseCharacters();
  }
  if(wantLowerCase){
    choosenChar += lowerCase;
  }
  if(wantUpperCase){
    choosenChar += upperCase;
  }
  if(wantNumber){
    choosenChar += numberChar;
  }
  if(wantSpecialChar){
    choosenChar += specialChar;
  }
}

// randomize selected characters
function generatePassword(){
  var password = "";
  for (var i = 0; i < passwordLength; i++){
    password += choosenChar[Math.floor(Math.random() * choosenChar.length)];
  }
  return password;

}


function writePassword() {
  determineLength();
  chooseCharacters();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
