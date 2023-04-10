describe('Automation practice page test', () => {
    beforeEach(() => {
        // cy.visit('http://zero.webappsecurity.com')
        cy.visit('https://autos.mercadolibre.com.ar/volkswagen/suran/hasta-90000-km/dueno-directo/desde-2015/suran_Desde_97_OrderId_PRICE_NoIndex_True')
    })
    
    it('Search in search bar' , () => {
        cy.get('#searchTerm').type('dress');
    })

    // it('adds a todo', () => {
    //     cy.request({
    //       url: '/todos',
    //       method: 'POST',
    //       body: {
    //         title: 'Write REST API',
    //       },
    //     })
    //       .its('body')
    //       .should('deep.contain', {
    //         title: 'Write REST API',
    //         completed: false,
    //       })
    //   })
})