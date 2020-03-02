// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creates a confirm box which takes in true or false.
var confirmPassword = confirm("Do you need a new, secured password?");

// Creates a prompt box which takes in text input.
var passwordType =confirm("Do you like to select criteria for your new password?");

if (passwordType ==true){

}else{
  
}
// Alerts the output from our confirm box.
alert("You like sushi: " + confirmSushi);

// Alerts the output from our prompt box.
alert("You like " + sushiType + " sushi!");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
