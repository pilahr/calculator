// ----- GET THE BUTTONS----- //
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".display-screen__result");
const zeroButton = document.querySelector("#zero");
const decimalButton = document.querySelector("#decimal");

// ----- VARIABLES ----- //
let number = "";
let operator = "";
let memoryNumber = 0;
let result = 0;

// ----- FUNCTIONS ----- //
const handleNumberClick = (event) => {
  number += event.target.innerText;

  console.log(parseInt(number));

  updateDisplay(number);
};

const handleOperatorClick = (event) => {
  const operator = event.target.innerText;
  console.log(operator);
  let memoryNumber = "";

  if (!operator) {
    return;
  }
  let result;
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

const updateDisplay = (number) => {
  display.innerText = number;
};

const handleClearClick = (event) => {
  number = "";
  updateDisplay(0);
};

const handlePercentageClick = (event) => {
  number = Number(display.innerText) / 100;
  updateDisplay(number);
};

const handleZeroButtonClick = (event) => {
  number += event.target.innerText;

  console.log(parseInt(number));
  updateDisplay(number);
};

const handleEqualButtonClick = (event) => {};

// ----- NUMBER BUTTON CLICKED ----- //

numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

// ----- OPERATOR BUTTON CLICKED ----- //
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

// ----- CLEAR BUTTON CLICKED ----- //
clearButton.addEventListener("click", handleClearClick);

// ----- PERCENTAGE BUTTON CLICKED -----//
percentageButton.addEventListener("click", handlePercentageClick);

// ----- ZERO BUTTON CLICKED -----//
zeroButton.addEventListener("click", handleZeroButtonClick);

// -----EQUAL BUTTON CLICKED -----//
equalButton.addEventListener("click", handleEqualButtonClick);
