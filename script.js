// ----- GET THE BUTTONS----- //
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector(".button__equal");
const display = document.querySelector(".display-screen__result");
const zeroButton = document.querySelector("#zero");
const decimalButton = document.querySelector("#decimal");

// ----- VARIABLES ----- //
let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;

// ----- FUNCTIONS ----- //
const updateDisplay = () => {
  display.innerText = `${firstNum} ${operator} ${secondNum}`;
};

const handleNumberClick = (event) => {
  if (operator === "") {
    firstNum += event.target.innerText;
  } else {
    secondNum += event.target.innerText;
  }
  updateDisplay();
};

const handleOperatorClick = (event) => {
  operator = event.target.innerText;
  console.log(operator);
};

const handleClearClick = (event) => {
  firstNum = 0;
  updateDisplay(0);
};

const handlePercentageClick = (event) => {
  firstNum = Number(display.innerText) / 100;
  updateDisplay();
};

const handleZeroButtonClick = (event) => {
  if (operator === "") {
    firstNum += event.target.innerText;
  } else {
    secondNum += event.target.innerText;
  }
  updateDisplay();
};

const handleEqualButtonClick = (event) => {
  // let inputString = display.innerText;
  // let numbers = inputString.split(/\+|\-|\x|\÷/g); //return array
  // let operators = inputString.replace(/[0-9]|\./g, "").split("");
  // console.log(inputString);
  // console.log(operators);
  // console.log(numbers);
  // loop through the array
  //   let divide = operators;
};

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
