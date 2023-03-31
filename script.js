// ---- GET THE BUTTONS----
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".display-screen__text");

console.log(display);

//ADD CLASS TO EQUAL BUTTON
operatorButtons[4].classList.add("equal");

// ---- VARIABLES ----
let number = "";
let operator = "";

// ---- FUNCTIONS ----
const handleNumberClick = (event) => {
  const number = parseInt(event.target.innerText);
  console.log(number);
  updateDisplay(number);
};

const handleOperatorClick = (event) => {
  const operator = event.target.innerText;
  console.log(operator);
};

// const handlePercentageClick = (event) => {
//   const number = parseFloat(number / number) * 100;
//   console.log(number);
// };

// ---- UPDATE DISPLAY FUNCTION ----
const updateDisplay = (number) => {
  display.innerText = number;
};

// ---- NUMBER BUTTON CLICKED ----
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

// ---- OPERATOR BUTTON CLICKED ----
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

// ---- PERCENTAGE BUTTON CLICKED ---
// percentageButton.addEventListener("click", handlePercentageClick);
