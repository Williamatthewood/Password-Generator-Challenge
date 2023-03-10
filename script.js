// Assignment code here
var passwordLength = 0;
var lowercase = "abcdefghijklmnopqrstuvwxyz ".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");
var numeric = "1234567890 ".split("");
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ".split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //event.preventDefault();??
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword(){
  passwordLength = parseInt(window.prompt("Enter desired password length (must be between 8 - 128 characters): "));
  var password = "";
  
  var lowerIndex = Math.floor(Math.random() * lowercase.length);

  //cancel the function if user presses cancel or inputs a non-integer
  if (!passwordLength){
    alert("You must input an integer to generate a password.");
    return;
  } else if(passwordLength < 8 || passwordLength > 128){ //checks if passwordLenth is in the required range
    alert("Invalid input. You must input an integer between 8 and 128 inclusive.");
    return;
  }
  var containsLowercase = window.confirm("Include lowercase letters in your password?");
  var containsUppercase = window.confirm("Include uppercase letters in your password?");
  var containsNumbers = window.confirm("Include numbers in your password?");
  var containsSpecials = window.confirm("Include special characters in your password?");

  if (containsLowercase && containsUppercase && containsNumbers && containsSpecials){
    for (let i = 1; i < passwordLength; i++) {
      
      
    }
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
