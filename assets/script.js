// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var symbols = [
  "!",
  "#",
  "$",
  "&",
  "%",
  "'",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~",
  "`",
  "{",
  "|",
  "}",
  ".",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  // make sure w have a password length
  var passwordLength = window.prompt(
    "Please choose a password between 8 and 128 characters"
  );
  var pwlength = parseInt(passwordLength, 10);

  if (pwlength < 8 || pwlength > 128 || isNaN(pwlength)) {
    alert("Password Length Does Not Meet Criteria");
    return;
  }

  var isUpper = confirm("Do you want to use uppercase letters?");
  var isLower = confirm("Do you want to use lowercase letters?");
  var isNumeric = confirm("Do you want to use numbers?");
  var isSymbol = confirm("Do you want to use symbols?");

  var finalPasswordArray = []
  
  // If user inputs all = false, alert.
  if (!(isUpper || isLower || isNumeric || isSymbol)) {
    alert("Error: You need atleast one of the criteria. Please try again.");
  }
if (isUpper){
  //push the uppar array into a final array
  finalPasswordArray.push(...uppercase)
}

if (isLower){
  //push the lower array into the final array
    finalPasswordArray.push(... lowercase);

}

if (isNumeric) {
    finalPasswordArray.push(...numbers);


}

if (isSymbol){
    finalPasswordArray.push(...symbols);


}

for (var i = 0; i <passwordLength; i++) {
  finalPasswordArray [Math.floor(Math.random() * finalPasswordArray.length)];
}






console.log(finalPasswordArray)

//for loop to select random characters in the amount of pwlength
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * passwordLength);
  password += passwordLength.substring(randomNumber, randomNumber +1);
}

print.finalPasswordArray;

//return the final password
document.getElementById("password").value = password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
generateBtn.addEventListener("click", writePassword);

// var passwordText = document.querySelector("#password");

// var password = generatePassword();

// passwordText.value = password;

// Update after grading. Add checkboxes - Change stylesheet - Revert HTML to match events

// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   Symbol: getRandomSymbol
// };

// // Copy to Clibboard
// clipboardEl.addEventListener('click', () => {
//   const textarea = document.createElement('textarea');
//   const password = resultEl.innerText;

//   if(!password) {
//     return;
//   }
// // execCommand is deprecated but no alternative?..
//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   alert('Password Copied To Clipboard!');
// });

// // Generate Password Event

// generateEl.addEventListener('click', () => {
//   const length = +lengthEl.value;
//   const hasLower = lowercaseEl.checked;
//   const hasUpper = uppercaseEl.checked;
//   const hasNumber = numbersEl.checked;
//   const hasSymbol = symbolsEl.checked;

// resultEl.innertext = generatePassword(
//   hasLower,
//   hasUpper,
//   hasNumber,
//   hasSymbol,
//   length
//   );
// })

// // Generate Password function
// function generatePassword(lower, upper, number, symbol, length) {
//   // 1. init pw var
//   // 2. filter out unchecked types
//   // 3. loop over length call generator function for each type
//   // 4. add final pw to pw var and return

//   let generatedPassword = '';

//   const typesCount = lower + upper + number + symbol;

//   console.log('typesCount: ', typesCount);

//   const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
//   (
//     item => Object.values(item)[0]
//   );

//   console.log('typesArr: ', typesArr);

//   if(typesCount === 0) {
//     return '';
//   }

//   for(let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];
//       console

//       generatedPassword += randomFunc[funcName]()
//     })
//   }
// const finalPassword = generatedPassword.slice(0, length);

// return finalPassword;
// }

// // Generator Functions
// // Functions - http://www.net-comber.com/charset.html

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() *26) + 97);
// }

// // Generate a Letter(uppercase)
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }
// // Generate a Number
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }
// // Generates a Symbol
// function getRandomSymbol() {
//   const symbols = '!@#$%^&*()_+-=?/.,{}[]';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
