// Assignment Code
var generateBtn = document.getElementById("generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()?/\|'<>,.`~";

var passwordText = document.getElementById("password");
var length = document.getElementById("length");
var incUpperCase = document.getElementById("upperCase");
var incLowerCase = document.getElementById("lowerCase");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");


// Write password to the #password input
function writePassword (length, characters) {
  var password = '';
  for (let index = 0; index <= length; index++) {
    password += characters.charAt(
     Math.floor(Math.random() * characters.length + 1)
    );
    
  }
  console.log (password);
  return password;
  
  }

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  let characters = lowerCase;
  incUpperCase.checked ? (characters += upperCase) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordText.value = writePassword(length.value, characters);
  

});

var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordText.select();
  document.execCommand("copy");
  alert("Password Copied");
});