/// <reference types="cypress" />

describe('JoiasMax Jobs - Home', () => {
    it('Should display 7 jobs', () => {
        cy.visit('https://base-css-in-js.vercel.app/')
        cy.wait(1000)
        cy.get(' .sc-dAlyuH.bMdtrN > li', {timeout: 1000}).should('have.length', 7)
    })

    it('Should filter for fullstack', () => {
        cy.visit('https://base-css-in-js.vercel.app/')
        cy.get('.sc-imWYAI.ivcQil').type('fullstack{enter}')
        cy.get(' button[type="submit"]').click()
        cy.get(' .sc-dAlyuH.bMdtrN > li', {timeout: 1000}).should('have.length', 1)
    })
})