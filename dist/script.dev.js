"use strict";

// ----- GET THE BUTTONS----- //
var numberButtons = document.querySelectorAll(".button__number");
var operatorButtons = document.querySelectorAll(".button__operator");
var clearButton = document.querySelector("#clear");
var signButton = document.querySelector("#sign");
var percentageButton = document.querySelector("#percentage");
var equalButton = document.querySelector(".button__equal");
var display = document.querySelector(".display-screen__result");
var zeroButton = document.querySelector("#zero"); // ----- VARIABLES ----- //

var firstNum = "";
var secondNum = "";
var operator = ""; // ----- FUNCTIONS ----- //

var handleNumberClick = function handleNumberClick(event) {
  var clickedNum = event.target.innerText;

  if (operator === "") {
    firstNum += clickedNum;
    display.innerText = firstNum;
  } else {
    secondNum += clickedNum;
    display.innerText = secondNum;
  }
};

var handleOperatorClick = function handleOperatorClick(event) {
  operator = event.target.innerText;
  display.innerText = operator;
};

var handleClearClick = function handleClearClick(event) {
  firstNum = "";
  secondNum = "";
  operator = "";
  display.innerText = "0";
};

var handlePercentageClick = function handlePercentageClick(event) {
  result = parseFloat(display.innerText) / 100;
  firstNum = "";
  secondNum = "";
  operator = "";
  display.innerText = result;
  result = "";
};

var handleZeroButtonClick = function handleZeroButtonClick(event) {
  if (operator === "") {
    firstNum += event.target.innerText;
    display.innerText = firstNum;
  } else {
    secondNum += event.target.innerText;
    display.innerText = secondNum;
  }
};

var handleEqualButtonClick = function handleEqualButtonClick(event) {
  var result;

  switch (operator) {
    case "+":
      result = parseFloat(firstNum) + parseFloat(secondNum);
      result = parseFloat(result.toFixed(4));
      break;

    case "-":
      result = parseFloat(firstNum) - parseFloat(secondNum);
      result = parseFloat(result.toFixed(4));
      break;

    case "x":
      result = parseFloat(firstNum) * parseFloat(secondNum);
      result = parseFloat(result.toFixed(4));
      break;

    case "÷":
      result = parseFloat(firstNum) / parseFloat(secondNum);
      result = parseFloat(result.toFixed(4));
      break;
  }

  display.innerText = result;
  firstNum = result;
  secondNum = "";
  operator = "";
};

var handleSignButtonClick = function handleSignButtonClick(event) {
  if (firstNum.includes("-")) {
    firstNum = Math.abs(firstNum);
    display.innerText = firstNum;
  } else {
    firstNum = "-" + firstNum;
    display.innerText = firstNum;
  }
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

equalButton.addEventListener("click", handleEqualButtonClick); // ----- SIGN BUTTON CLICKED -----//

signButton.addEventListener("click", handleSignButtonClick);