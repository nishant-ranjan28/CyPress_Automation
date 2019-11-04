/// <reference types="Cypress" />

describe("My first test suite", function(){

    it("My first test case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        //get is like find element in cypress
        cy.get('.search-keyword').type('ca')
        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length',  4);

        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click().then(function(){
            console.log('hello')
        })
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
            }
        })
        
        //verify printing correctly
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in log
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        //cy.log(logo.text())
    })

})