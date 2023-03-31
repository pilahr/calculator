"use strict";

// ---- GET THE BUTTONS----
var numberButtons = document.querySelectorAll(".button__number");
var operatorButtons = document.querySelectorAll(".button__operator");
var clearButton = document.querySelector("#clear");
var signButton = document.querySelector("#sign");
var percentageButton = document.querySelector("#percentage");
var equalButton = document.querySelector("#equal");
var display = document.querySelector(".display-screen__result"); //ADD CLASS TO EQUAL BUTTON

operatorButtons[4].classList.add("equal"); // ---- VARIABLES ----

var number = "";
var operator = "";
var finalResult = 0; // ---- FUNCTIONS ----

var handleNumberClick = function handleNumberClick(event) {
  var number = parseInt(event.target.innerText);
  console.log(number);
  updateDisplay(number);
};

var handleOperatorClick = function handleOperatorClick(event) {
  var operator = event.target.innerText;
  console.log(operator);
  updateDisplay2(operator);
};

var updateDisplay = function updateDisplay(number) {
  display.innerText = number;
};

var updateDisplay2 = function updateDisplay2(operator) {
  display.innerText = operator;
};

var handleClearClick = function handleClearClick(event) {
  updateDisplay("0");
}; // const calculate = (number) => {
//   number = parseFloat(display.text());
//   switch (operator) {
//     case "addition":
//       finalResult += number;
//       break;
//     case "subtraction":
//       finalResult -= number;
//       break;
//     case "multiplication":
//       finalResult *= number;
//       break;
//     case "division":
//       finalResult /= number;
//       break;
//     default:
//       break;
//   }
// };
// ---- NUMBER BUTTON CLICKED ----


numberButtons.forEach(function (button) {
  button.addEventListener("click", handleNumberClick);
}); // ---- OPERATOR BUTTON CLICKED ----

operatorButtons.forEach(function (button) {
  button.addEventListener("click", handleOperatorClick);
}); // ---- CLEAR BUTTON CLICKED

clearButton.addEventListener("click", handleClearClick);