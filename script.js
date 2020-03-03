var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="0123456789";
var symbols ="!@#$%^&*()_+~`|][{}:;'?/>.<,=-[";
var generateBtn =document.getElementById("generate");
var passwordFeild = document.getElementById("#password");
var userPassword;
var passwordType;
var plength;

document.getElementById("generate").addEventListener("click",generatPassword);
 
function generatPassword(){   
  
  userPassword ="";
  passwordType ="";
 
  inputplength = prompt("Please provide a number between 8 to 128 ");
  if (inputplength >=8 && inputplength <=128){
     plength = parseInt(inputplength);
     console.log(plength);
  
      inputlowercase = confirm("Do you want Lowerercase in your password !");
      if(inputlowercase == true){
          inputlowercase = this.lowercase;
          for(let i = 0 ; i< lowercase.length; i++){
            passwordType+=lowercase;
          console.log(lowercase);
        
       // passwordType += lowercase;
      }
    }
      inputuppercase = confirm("Do you want Upercase in your password !")
      if(inputuppercase == true){
          inputuppercase = this.uppercase;
          for(let i = 0 ; i< uppercase.length; i++){
            passwordType+=uppercase;
          console.log(uppercase);
        }
       // passwordType += uppercase;
      }
      inputsymbols = confirm("Do you want Symbols in your password !")
        if(inputsymbols == true){
            inputsymbols = this.symbols;
        
            for(let i = 0 ; i< symbols.length; i++){
              passwordType+=symbols;
            console.log(symbols);
          }
        }
      inputnumbers = confirm("Do you want Numbers in your password !")
      if(inputnumbers == true){
          inputnumbers = this.numbers;
          for(let i = 0 ; i< numbers.length; i++){
            passwordType+=numbers;
          console.log(numbers);
        }
      }
        

       for (let i = 0; i < plength; i++) {
          userPassword += passwordType.charAt(
            Math.floor(Math.random() * passwordType.length)
          );
          }
          console.log(userPassword)
          document.getElementById("password").innerHTML = userPassword;
  }

  else{
    alert(" Your input is not Wright");
  }
}
  


// Assignment Code
//var generateBtn = document.querySelector("#generate");


// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/

