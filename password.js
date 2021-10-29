const { generateKey } = require("crypto");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome!");

reader.question("What password would you like to validate?", function (input) {
  tokens = input.split("");
  // tokens = input;
  console.log(tokens);
  // console.log(input);
  // tokens = input.split(" ");

  if (tokens.length >= 10) {
    console.log("Thank you, that works!");
  } else {
    console.log("Make sure your password is at least 10 characters long");
  }
  // mathSymbol = tokens[0];
  // num1 = Number(tokens[1]);
  // num2 = Number(tokens[2]);

  // console.log("mathSymbol", mathSymbol);
  // console.log("num1", num1);
  // console.log("num2", num2);

  // This line closes the connection to the command line interface.
  reader.close();
});
