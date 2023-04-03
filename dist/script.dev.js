"use strict";

// ----- GET THE BUTTONS----- //
var numberButtons = document.querySelectorAll(".button__number");
var operatorButtons = document.querySelectorAll(".button__operator");
var clearButton = document.querySelector("#clear");
var signButton = document.querySelector("#sign");
var percentageButton = document.querySelector("#percentage");
var equalButton = document.querySelector(".button__equal");
var display = document.querySelector(".display-screen__result");
var zeroButton = document.querySelector("#zero");
var decimalButton = document.querySelector("#decimal"); // ----- VARIABLES ----- //

var firstNum = "";
var secondNum = "";
var operator = "";
var result = 0; // ----- FUNCTIONS ----- //

var updateDisplay = function updateDisplay() {
  display.innerText = "".concat(firstNum, " ").concat(operator, " ").concat(secondNum);
};

var handleNumberClick = function handleNumberClick(event) {
  if (operator === "") {
    firstNum += event.target.innerText;
  } else {
    secondNum += event.target.innerText;
  }

  updateDisplay();
};

var handleOperatorClick = function handleOperatorClick(event) {
  operator = event.target.innerText;
  console.log(operator);
};

var handleClearClick = function handleClearClick(event) {
  firstNum = 0;
  updateDisplay(0);
};

var handlePercentageClick = function handlePercentageClick(event) {
  firstNum = Number(display.innerText) / 100;
  updateDisplay();
};

var handleZeroButtonClick = function handleZeroButtonClick(event) {
  if (operator === "") {
    firstNum += event.target.innerText;
  } else {
    secondNum += event.target.innerText;
  }

  updateDisplay();
};

var handleEqualButtonClick = function handleEqualButtonClick(event) {// let inputString = display.innerText;
  // let numbers = inputString.split(/\+|\-|\x|\÷/g); //return array
  // let operators = inputString.replace(/[0-9]|\./g, "").split("");
  // console.log(inputString);
  // console.log(operators);
  // console.log(numbers);
  // loop through the array
  //   let divide = operators;
}; // ----- NUMBER BUTTON CLICKED ----- //


numberButtons.forEach(function (button) {
  button.addEventListener("click", handleNumberClick);
}); // ----- OPERATOR BUTTON CLICKED ----- //

operatorButtons.forEach(function (button) {
  button.addEventListener("click", handleOperatorClick);
}); // ----- CLEAR BUTTON CLICKED ----- //

clearButton.addEventListener("click", handleClearClick); // ----- PERCENTAGE BUTTON CLICKED -----//

percentageButton.addEventListener("click", handlePercentageClick); // ----- ZERO BUTTON CLICKED -----//

zeroButton.addEventListener("click", handleZeroButtonClick); // -----EQUAL BUTTON CLICKED -----//

equalButton.addEventListener("click", handleEqualButtonClick);