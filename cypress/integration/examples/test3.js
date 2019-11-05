/// <reference types="Cypress" />

describe("My Second test suite", function(){

    it("My first second case", function(){
        
        //checkbox

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option2'])

        //Static Dropdown

        
    })

})