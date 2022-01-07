const { generateKey } = require("crypto");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome!");

reader.question("What password would you like to validate?", function (input) {
  tokens = input.split("");

  let correctLength = false;
  let correctLower = false;
  let correctUpper = false;
  let correctNumbers = false;

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  let lengthError = "at least 10 characters";
  let lowerError = "a lowercase letter";
  let upperError = "an uppercase letter";
  let numberError = "a number";
  let errorMessage = "Invalid input, your password needs: ";
  let successMessage = "Thank you, your password is validated";

  if (tokens.length >= 10) {
    correctLength = true;
  } else {
    errorMessage.concat(lengthError);
  }

  if (input.value.match(lowerCaseLetters)) {
    correctLower = true;
  } else {
    errorMessage.concat(lowerError);
  }

  if (input.value.match(upperCaseLetters)) {
    correctUpper = true;
  } else {
    errorMessage.concat(upperError);
  }

  if (input.value.match(numbers)) {
    correctNumbers = true;
  } else {
    errorMessage.concat(numberError);
  }

  if (
    correctLength === true &&
    correctLower === true &&
    correctUpper === true &&
    correctNumbers === true
  ) {
    console.log(successMessage);
  } else {
    console.log(errorMessage);
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
