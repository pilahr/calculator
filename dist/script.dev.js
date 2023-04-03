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
var decimalButton = document.querySelector("#decimal");
console.log(clearButton); // ----- VARIABLES ----- //

var firstNum = "";
var secondNum = "";
var operator = "";
var result = ""; // ----- FUNCTIONS ----- //

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
};

var handleClearClick = function handleClearClick(event) {
  display.innerText = "0";
  firstNum = "";
  secondNum = "";
  operator = "";
};

var handlePercentageClick = function handlePercentageClick(event) {
  firstNum = parseFloat(display.innerText) / 100;
  updateDisplay(firstNum);
};

var handleZeroButtonClick = function handleZeroButtonClick(event) {
  if (operator === "") {
    firstNum += event.target.innerText;
  } else {
    secondNum += event.target.innerText;
  }

  updateDisplay();
};

var handleEqualButtonClick = function handleEqualButtonClick(event) {
  var result;

  switch (operator) {
    case "+":
      result = parseFloat(firstNum) + parseFloat(secondNum);
      console.log(result);
      break;

    case "-":
      result = parseFloat(firstNum) - parseFloat(secondNum);
      console.log(result);
      break;

    case "x":
      result = parseFloat(firstNum) * parseFloat(secondNum);
      console.log(result);
      break;

    case "÷":
      result = parseFloat(firstNum) / parseFloat(secondNum);
      console.log(result);
      break;
  }

  display.innerText = result;
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