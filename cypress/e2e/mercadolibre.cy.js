import indexPage from '../support/pages/index'

describe('Automation practice page test', () => {
    beforeEach(() => {
        cy.visit('https://www.mercadolibre.com.ar')
    })
    
    it('Search cars in search bar' , () => {
        indexPage.search('volkswagen suran')
        //cy.get('#nav-search-input').type("volkswagen suran")
        //cy.get('.nav-icon-search').click()
        cy.get('#mlCategory > label').should('have.text', 'Solo en Autos y Camionetas')
    })

    it('Search bike in search bar' , () => {
        cy.get('#nav-search-input').type("yamaha mt 03")
        cy.get('.nav-icon-search').click()
        cy.get('#mlCategory > label').should('have.text', 'Solo en Motos')
    })
})