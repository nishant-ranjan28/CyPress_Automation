/// <reference types="Cypress" />

describe("My Second Test Suite", function() {
  it("My FirstTest case", function() {
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('.mouse-hover-content').invoke('show')

    //invisible element can be clicked
    //cy.contains('Reload').click({force : true})
    cy.url().should('include', 'AutomationPractice')
  });
});
