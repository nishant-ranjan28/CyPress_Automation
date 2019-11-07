/// <reference types="Cypress" />

describe("My Second test suite", function(){

    it("My first second case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()
        cy.get('[value ="Confirm"]').click()

        //verify window alert

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

})