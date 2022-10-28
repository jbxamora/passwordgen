const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol
};

// Generate Password Event

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

resultEl.innertext = generatePassword(
  hasLower,
  hasUpper, 
  hasNumber, 
  hasSymbol, 
  length
  );
})

// Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. init pw var
  // 2. filter out unchecked types
  // 3. loop over length call generator function for each type
  // 4. add final pw to pw var and return
}

// Generator Functions 
// Functions - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

// Generate a Letter(uppercase)
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// Generate a Number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// Generates a Symbol
function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+-=?/.,{}[]';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomNumber())

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
