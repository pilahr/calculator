// ---- GET THE BUTTONS----
const numberButtons = document.querySelectorAll(".button__number");
const operatorButtons = document.querySelectorAll(".button__operator");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentageButton = document.querySelector("#percentage");
const equalButton = document.querySelector("#equal");

console.log(operatorButtons);
//ADD CLASS TO EQUAL BUTTON
operatorButtons[4].classList.add("equal");

// ---- VARIABLES ----
let number = "";

// ---- FUNCTIONS ----
const handleNumberClick = (event) => {
  const number = parseInt(event.target.innerText);
  console.log(number);
};

// ---- NUMBER BUTTON CLICKED ----
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});
