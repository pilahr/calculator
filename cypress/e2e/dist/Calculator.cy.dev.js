"use strict";

describe('Calculator', function () {
  it('Should have equal sign in it', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    var equal = cy.get('#equal');
    equal.should('contain', "=");
  });
  it('Should be a button for click', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    var numberOne = cy.get('#one');
    numberOne.click();
  });
  it('Should contain a multiplication sign', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    var multiplicationSign = cy.get('#multiplication');
    multiplicationSign.contains('x');
    multiplicationSign.should('exist');
  });
  it('Should not contain a two digits number on the button', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    var buttons = cy.get('.button');
    var twoDigitButton = buttons.contains('16');
    twoDigitButton.should('not.exist');
  });
  it('Should be able to add two positive numbers', function () {
    // visit page
    cy.visit('http://127.0.0.1:5502/index.html'); // click first number

    cy.get('#five').click(); // click plus sign

    cy.get('#addition').click(); // click second number

    cy.get('#three').click(); // click equal sign

    cy.get('#equal').click(); // get the result

    var resultForPlus = cy.get('.display-screen__result');
    resultForPlus.should('contain.text', '8');
  });
  it('Should be able to do the subtraction', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    cy.get('#eight').click();
    cy.get('#subtraction').click();
    cy.get('#two').click();
    cy.get('#equal').click();
    var resultForMinus = cy.get('.display-screen__result');
    resultForMinus.should('contain.text', '6');
  });
  it('Should be able to do the division', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    cy.get('#eight').click();
    cy.get('#division').click();
    cy.get('#two').click();
    cy.get('#equal').click();
    var resultForMinus = cy.get('.display-screen__result');
    resultForMinus.should('contain.text', '4');
  });
  it('Should be able to get the result of the percentage sign', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    cy.get('#eight').click();
    cy.get('#one').click();
    cy.get('#percentage').click();
    var resultForPercentage = cy.get('.display-screen__result');
    resultForPercentage.should('contain.text', '0.81');
  });
  it('The C button should clear the screen to 0 ', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
    cy.get('#five').click();
    cy.get('#one').click();
    cy.get('#eight').click();
    cy.get('#clear').click();
    var clear = cy.get('.display-screen__result');
    clear.should('contain.text', '0');
  });
});