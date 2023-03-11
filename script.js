// Assignment code here
var passwordLength = 0;
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "1234567890".split("");
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

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
  var passwordArray = [];
  
  // var lowerIndex = Math.floor(Math.random() * lowercase.length);


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
    for (let i = 0; i < passwordLength; i++) {
      passwordArray.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
      // if (passwordArray === []){
      //   passwordArray.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
      // }
      // else if (lowercase.includes(password[i - 1])){
      //   passwordArray.push(uppercase[Math.floor(Math.random()* uppercase.length)]);
      // }
      // else if (uppercase.includes(password[i - 1])){
      //   passwordArray.push(numeric[Math.floor(Math.random()* numeric.length)]);
      // }
      // else if (numeric.includes(password[i - 1])){
      //   passwordArray.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
      // }
      // else {
      //   passwordArray.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
      // }
      
    }
  } 
  else if(containsLowercase && containsUppercase && containsNumbers) {
    console.log("lower, upper, and numbers selected");
  }
  else if (containsLowercase && containsUppercase && containsSpecials){
    console.log("lower, upper, and specials selected");
  }
  else if (containsLowercase && containsNumbers && containsSpecials){
    console.log("lower, numbers, and specials selected");
  }
  else if (containsUppercase && containsNumbers && containsSpecials){
    console.log("upper, numbers, and specials selected");
  }
  else if (containsLowercase && containsUppercase){
    console.log("lower and upper selected");
  }
  else if (containsLowercase && containsNumbers){
    console.log("lower and numbers selected");
  }
  else if (containsLowercase && containsSpecials){
    console.log("lower and specials selected");
  }
  else if (containsUppercase && containsNumbers){
    console.log("upper and numbers selected");
  }
  else if(containsUppercase && containsSpecials){
    console.log("upper and specials selected");
  }
  else if(containsNumbers && containsSpecials){
    console.log("numbers and specials selected");
  }
  else if(containsLowercase){
    console.log("lower selected");
  }
  else if(containsUppercase){
    console.log("upper selected");
  }
  else if(containsNumbers){
    console.log("numbers selected");
  }
  else if(containsSpecials){
    console.log("specials selected");
  }
  else {
    console.log("nothing was selected");
  }

  var password = passwordArray.join("");
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
