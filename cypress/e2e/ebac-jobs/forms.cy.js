/// <reference types="cypress" />

describe('Tests for application page - Forms', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Should bring the user to the applications forms', () => {
        cy.wait(1000)
        cy.get(' .Vaga_vagaLink__DeFkk', {timeout: 1000}).first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('inscription-screen')
    })

    it('Should fill the applications forms', () => {
        cy.wait(1000)
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('João da Silva')
        cy.get('input[name="email"]').type('satoshi@nakamoto.btc')
        cy.get('input[name="telefone"]').type('11 999999999')
        cy.get('input[name="endereco"]').type('Rua borba gato, 50')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('.Aplicacao_button__tw2AE', {timeout: 3000}).should('be.visible').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contains('Obrigado pela candidatura!')
        })

        cy.screenshot('filled-form')
    })
})