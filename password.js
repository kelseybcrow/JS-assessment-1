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

  let errorMessage = "";

  if (tokens.length >= 10) {
    correctLength = true;
  } else {
    errorMessage = "Your password needs at least 10 characters";
  }

  if (tokens)
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
