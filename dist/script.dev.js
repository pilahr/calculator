"use strict";

// ----- GET THE BUTTONS----- //
var numberButtons = document.querySelectorAll(".button__number");
var operatorButtons = document.querySelectorAll(".button__operator");
var clearButton = document.querySelector("#clear");
var signButton = document.querySelector("#sign");
var percentageButton = document.querySelector("#percentage");
var equalButton = document.querySelector("#equal");
var display = document.querySelector(".display-screen__result");
var zeroButton = document.querySelector("#zero");
var decimalButton = document.querySelector("#decimal"); // ----- VARIABLES ----- //

var number = "";
var operator = "";
var memoryNumber = 0;
var result = 0; // ----- FUNCTIONS ----- //

var handleNumberClick = function handleNumberClick(event) {
  number += event.target.innerText;
  console.log(parseInt(number));
  updateDisplay(number);
};

var handleOperatorClick = function handleOperatorClick(event) {
  var operator = event.target.innerText;
  console.log(operator);
  var memoryNumber = "";

  if (!operator) {
    return;
  }

  var result;

  switch (operator) {
    case "+":
      result = memoryNumber + parseFloat(number);
      break;

    case "-":
      result = memoryNumber - parseFloat(number);
      break;

    case "x":
      result = memoryNumber * parseFloat(number);
      break;

    case "÷":
      result = memoryNumber / parseFloat(number);
      break;
  }

  console.log(result);
};

var updateDisplay = function updateDisplay(number) {
  display.innerText = number;
};

var handleClearClick = function handleClearClick(event) {
  number = "";
  updateDisplay(0);
};

var handlePercentageClick = function handlePercentageClick(event) {
  number = Number(display.innerText) / 100;
  updateDisplay(number);
};

var handleZeroButtonClick = function handleZeroButtonClick(event) {
  number += event.target.innerText;
  console.log(parseInt(number));
  updateDisplay(number);
};

var handleEqualButtonClick = function handleEqualButtonClick(event) {}; // ----- NUMBER BUTTON CLICKED ----- //


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