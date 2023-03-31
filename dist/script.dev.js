"use strict";

// ---- GET THE BUTTONS----
var numberButtons = document.querySelectorAll(".button__number");
var operatorButtons = document.querySelectorAll(".button__operator");
var clearButton = document.querySelector("#clear");
var signButton = document.querySelector("#sign");
var percentageButton = document.querySelector("#percentage");
var equalButton = document.querySelector("#equal");
var display = document.querySelector(".display-screen__text");
console.log(display); //ADD CLASS TO EQUAL BUTTON

operatorButtons[4].classList.add("equal"); // ---- VARIABLES ----

var number = "";
var operator = ""; // ---- FUNCTIONS ----

var handleNumberClick = function handleNumberClick(event) {
  var number = parseInt(event.target.innerText);
  console.log(number);
  updateDisplay(number);
};

var handleOperatorClick = function handleOperatorClick(event) {
  var operator = event.target.innerText;
  console.log(operator);
}; // const handlePercentageClick = (event) => {
//   const number = parseFloat(number / number) * 100;
//   console.log(number);
// };
// ---- UPDATE DISPLAY FUNCTION ----


var updateDisplay = function updateDisplay(number) {
  display.innerText = number;
}; // ---- NUMBER BUTTON CLICKED ----


numberButtons.forEach(function (button) {
  button.addEventListener("click", handleNumberClick);
}); // ---- OPERATOR BUTTON CLICKED ----

operatorButtons.forEach(function (button) {
  button.addEventListener("click", handleOperatorClick);
}); // ---- PERCENTAGE BUTTON CLICKED ---
// percentageButton.addEventListener("click", handlePercentageClick);