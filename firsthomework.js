// //Homework1

// // 1. Request lenght of a square - display perimeter
let side = prompt("A length of a square?");
console.log(side * 4);

// // 2. Request year of birth - display age
let age = prompt("What year are you born?");
let year = 2020;
console.log(year - age);

// // 3. Request distance between two cities & time to cover it within
let distance = prompt(
  "What's the distance in kilometers between your two cities?"
);
let time = prompt("How many hours do you have to get there?");
console.log(distance / time);

// // 4. Currency converter. Request USD and display EUR in console
let USD = prompt("US Dollars to be converted to Euros?");
let EUR = 0.919865 * USD;
console.log(EUR);

// 5. a * x + b = 0
let a = prompt("A number?");
let b = prompt("A second number");
let x = (b - 0) / a;
console.log(x);

//6. Request time (HH:MM) - display how many minutes are left until tomorrow
let time = prompt("What time is it? HH:mm");
time.indexOf(":");
hours = time.slice(0, time.indexOf(":"));
minutes = time.slice(time.indexOf(":)") - 1);
console.log(23 - hours + " " + "hours", 60 - minutes + " " + "minutes");

//Homework 2

// // 1. Calculator
let firstNumber = +prompt("Give a number");
let secondNumber = +prompt("Give a second number");
let operation = prompt(
  "What would you like to do with your numbers? Add, subtract, multiply och divise?"
);
if (operation === "+") console.log(firstNumber + secondNumber);
else if (operation === "-") console.log(firstNumber - secondNumber);
else if (operation === "*") console.log(firstNumber * secondNumber);
else if (operation === "/") console.log(firstNumber / secondNumber);

// 2. Factorial
let n = Number(prompt("Give a number"));
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
alert(factorial(n));

// 3. Count sheep
let number = +prompt("Give a number");
let i = 1;

if (number <= 0) {
  alert("Error! You have entered a negative value, please try again");
} else
  while (i <= number) {
    document.write(i + "<p>sheep...</p>");
    i++;
  }

// 4. Correct answer for 2 + 2 * 2
let number = prompt("What is the correct answer to 2 + 2 * 2?");

if (number == 6) {
  alert("You are correct!");
} else
  while (number !== 6) {
    prompt("Sorry, that is incorrect. Please try again: what is 2 + 2 * 2?");
  }
