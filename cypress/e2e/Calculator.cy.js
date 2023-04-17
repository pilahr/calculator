describe('Calculator', () => {
  it('Should have equal sign in it', () => {
    cy.visit('http://127.0.0.1:5502/index.html')

    const equal = cy.get('#equal')
    equal.should('contain', "=")
  })

  it('Should be a button for click', () => {
    cy.visit('http://127.0.0.1:5502/index.html')
    const numberOne = cy.get('#one')
    numberOne.click()
  })

  it('Should contain a multiplication sign', () => {
    cy.visit('http://127.0.0.1:5502/index.html')
    const multiplicationSign = cy.get('#multiplication')
    multiplicationSign.contains('x')
    multiplicationSign.should('exist')
  })

  it('Should not contain a two digits number on the button', ()=> {
    cy.visit('http://127.0.0.1:5502/index.html')
    const buttons = cy.get('.button')
    const twoDigitButton = buttons.contains('16')
    twoDigitButton.should('not.exist')
  })

  it('Should be able to add two positive numbers', () => {
    // visit page
    cy.visit('http://127.0.0.1:5502/index.html')

    // click first number
    cy.get('#five').click()

    // click plus sign
    cy.get('#addition').click()

    // click second number
    cy.get('#three').click()
  
    // click equal sign
    cy.get('#equal').click()
    
    // get the result
    const resultForPlus = cy.get('.display-screen__result')
    resultForPlus.should('contain.text', '8')
  })

  it('Should be able to do the subtraction', ()=> {
    cy.visit('http://127.0.0.1:5502/index.html')
    cy.get('#eight').click()
    cy.get('#subtraction').click()
    cy.get('#two').click()
    cy.get('#equal').click()
    const resultForMinus = cy.get('.display-screen__result')
    resultForMinus.should('contain.text', '6')
  })

  it('Should be able to do the division', ()=> {
    cy.visit('http://127.0.0.1:5502/index.html')
    cy.get('#eight').click()
    cy.get('#division').click()
    cy.get('#two').click()
    cy.get('#equal').click()
    const resultForMinus = cy.get('.display-screen__result')
    resultForMinus.should('contain.text', '4')
  })

  it('Should be able to get the result of the percentage sign', ()=> {
    cy.visit('http://127.0.0.1:5502/index.html')
    cy.get('#eight').click()
    cy.get('#one').click()
    cy.get('#percentage').click()
    const resultForPercentage = cy.get('.display-screen__result')
    resultForPercentage.should('contain.text', '0.81')
  })

  it('The C button should clear the screen to 0 ', ()=>{
    cy.visit('http://127.0.0.1:5502/index.html')
    cy.get('#five').click()
    cy.get('#one').click()
    cy.get('#eight').click()
    cy.get('#clear').click()
    const clear = cy.get('.display-screen__result')
    clear.should('contain.text', '0')
  })
})