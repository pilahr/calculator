// ----- GET THE BUTTONS----- //
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector(".button__equal");
const display = document.querySelector(".display-screen__result");
const zeroButton = document.querySelector("#zero");
// const decimalButton = document.querySelector("#decimal");

// ----- VARIABLES ----- //
let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

// ----- FUNCTIONS ----- //
const updateDisplay = () => {
  display.innerText = `${firstNum} ${operator} ${secondNum} ${result}`;
};

const handleNumberClick = (event) => {
  if (operator === "") {
    firstNum += event.target.innerText;
    console.log(firstNum);
  } else {
    secondNum += event.target.innerText;
  }
  updateDisplay();
};

const handleOperatorClick = (event) => {
  operator = event.target.innerText;
};

const handleClearClick = (event) => {
  display.innerText = "0";
  firstNum = "";
  secondNum = "";
  operator = "";
};

const handlePercentageClick = (event) => {
  result = parseFloat(display.innerText) / 100;
  firstNum = "";
  secondNum = "";
  operator = "";
  updateDisplay();
  result = "";
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
  let result;
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
  display.innerText = result.toFixed(2);
};

const handleSignButtonClick = (event) => {
  if (firstNum.includes("-")) {
    firstNum = Math.abs(firstNum);
  } else {
    firstNum = "-" + firstNum;
  }

  updateDisplay();
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
