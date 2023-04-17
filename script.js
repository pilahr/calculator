// ----- GET THE BUTTONS----- //
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector(".button__equal");
const display = document.querySelector(".display-screen__result");
const zeroButton = document.querySelector("#zero");

// ----- VARIABLES ----- //
let firstNum = "";
let secondNum = "";
let operator = "";

// ----- FUNCTIONS ----- //
const handleNumberClick = (event) => {
  const clickedNum = event.target.innerText;
  if (operator === "") {
    firstNum += clickedNum;
    display.innerText = firstNum;
  } else {
    secondNum += clickedNum;
    display.innerText = secondNum;
  }
};

const handleOperatorClick = (event) => {
  operator = event.target.innerText;
  display.innerText = operator;
};

const handleClearClick = (event) => {
  firstNum = "";
  secondNum = "";
  operator = "";
  display.innerText = "0";
};

const handlePercentageClick = (event) => {
  result = parseFloat(display.innerText) / 100;
  firstNum = "";
  secondNum = "";
  operator = "";
  display.innerText = result;
  result = "";
};

const handleZeroButtonClick = (event) => {
  if (operator === "") {
    firstNum += event.target.innerText;
    display.innerText = firstNum;
  } else {
    secondNum += event.target.innerText;
    display.innerText = secondNum;
  }
};

const handleEqualButtonClick = (event) => {
  let result;
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

const handleSignButtonClick = (event) => {
  if (firstNum.includes("-")) {
    firstNum = Math.abs(firstNum);
    display.innerText = firstNum;
  } else {
    firstNum = "-" + firstNum;
    display.innerText = firstNum;
  }
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

// ----- SIGN BUTTON CLICKED -----//
signButton.addEventListener("click", handleSignButtonClick);
