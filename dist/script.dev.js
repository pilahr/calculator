"use strict";

// ---- GET THE BUTTONS----
var numberButtons = document.querySelectorAll(".button__number");
var operatorButtons = document.querySelectorAll(".button__operator");
var clearButton = document.querySelector("#clear");
var signButton = document.querySelector("#sign");
var percentageButton = document.querySelector("#percentage");
var equalButton = document.querySelector("#equal");
console.log(operatorButtons); //ADD CLASS TO EQUAL BUTTON

operatorButtons[4].classList.add("equal"); // ---- VARIABLES ----

var number = ""; // ---- FUNCTIONS ----

var handleNumberClick = function handleNumberClick(event) {
  var number = parseInt(event.target.innerText);
  console.log(number);
}; // ---- NUMBER BUTTON CLICKED ----


numberButtons.forEach(function (button) {
  button.addEventListener("click", handleNumberClick);
});