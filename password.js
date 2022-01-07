const { generateKey } = require("crypto");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome!");

reader.question("What password would you like to validate?", function (input) {
  tokens = input.split("");
  // console.log(tokens);

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

  if (tokens.value.match(lowerCaseLetters)) {
    correctLower = true;
  } else {
    errorMessage.concat(lowerError);
  }

  if (tokens.value.match(upperCaseLetters)) {
    correctUpper = true;
  } else {
    errorMessage.concat(upperError);
  }

  if (
    correctLength === true &&
    correctLower === true &&
    correctUpper === true
  ) {
    console.log("Thank you, your password is validated");
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
