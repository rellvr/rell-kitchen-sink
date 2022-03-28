/// <reference types="cypress" />

describe("Actions", () => {
    //go to actions page
    before(() =>{
        cy.visit("//commands/actions");
        cy.get("h1").should("have.text", "Actions")
    })

    it("Allow user to input text", () =>{
        cy.get('.action-email')
        .type('test@email.com')
        .should('have.value', 'test@email.com')
    })

    it("Allow user to clear exisitng text", () =>{
        cy.get('.action-email')
        .clear()
        .should('have.value', '')
    })

    it("Verify if field is disabled", () => {
        cy.get(".action-disabled")
        .should("have.attr", "disabled", "disabled")
    })

    it("Click a button and verify confirmation message", () => {
        cy.get('.action-form')
        .find('[type="text"]').type('Hhdjky789')
        cy.get('.action-form').submit()
            .next()
            .should('contain', 'Your form has been submitted!')
            .should('have.attr', 'style', 'color: rgb(32, 181, 32);')
    })

    it("Double click an element", () => {
        cy.get('.action-div')
        .dblclick()
        .should('not.be.visible')
        cy.get('.action-input-hidden')
        .should('be.visible')
        .clear().type("Successfully Doubled click")
    })

    it("Right click an element", () => {
        cy.get('.rightclick-action-div').contains("Right click to edit")
        .rightclick({timeout: 1000 * 5}).should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
    })

    it("Check and Uncheck checkboxes", () => {
        cy.get('[type="checkbox"]').check('checkbox3')
        .should('be.checked')  
    })
})