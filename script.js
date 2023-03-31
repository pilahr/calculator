// ---- GET THE BUTTONS----
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".display-screen__result");

//ADD CLASS TO EQUAL BUTTON
operatorButtons[4].classList.add("equal");

// ---- VARIABLES ----
let number = "";
let operator = "";
let finalResult = 0;
let haveDot = false;

// ---- FUNCTIONS ----
const handleNumberClick = (event) => {
  number += event.target.innerText;

  console.log(number);
  updateDisplay(number);
};

const handleOperatorClick = (event) => {
  const operator = event.target.innerText;
  console.log(operator);
  updateDisplay2(operator);
};

const updateDisplay = (number) => {
  display.innerText = number;
};

const updateDisplay2 = (operator) => {
  display.innerText = operator;
};

const handleClearClick = (event) => {
  updateDisplay("0");
};

const handlePercentageClick = (event) => {
  const decimalNumber = (number) => {
    parseFloat(number / 100);
    return decimalNumber;
  };
};

// const appendNumber = (number) => {
//   if (number.length < 10) {
//     number = event.target.innerText
//   } else {
//     number += event.target.innerText
//   }
//   // if (number === "." && display.includes("."))
//   //   display = display.toString() + number.toString();
//   // return parseInt(display.innerText);
// };

// const calculate = (number) => {
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

numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

// ---- OPERATOR BUTTON CLICKED ----
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

// ---- CLEAR BUTTON CLICKED
clearButton.addEventListener("click", handleClearClick);

// ---- PERCENTAGE BUTTON CLICKED
percentageButton.addEventListener("click", handlePercentageClick);
