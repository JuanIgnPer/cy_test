
describe("spaceX challange", () => {
    it('1 - Load browser', () => {
        cy.visit('https://csb-x6dpt1.netlify.app/')
    })

    /*2 - Check for network request to https://api.spacexdata.com/v3/rockets
     and verify response contains information for 4 rockets,
     and the field first_flight is in all cases later than 2005*/
    it('2 - Verify rockets information', () => {
        cy.request('https://api.spacexdata.com/v3/rockets')
        .then((response) => {
          expect(response).property('body').to.have.property('length').equals(4)          
          for (var index in response.body) {
          //  var responseYear = new Date(response.body[index].first_flight).getFullYear()
            var responseYear = Number(response.body[index].first_flight.substring(0,4) )
            expect(responseYear).to.gt(2005);     
          }
        })
    })

    it('3- Search “crs” on the UI search box', () => {
        cy.visit('https://csb-x6dpt1.netlify.app/')
        cy.get('input').type("crs")
    })

    it('4- Check that 3 pages are being founded', () => {
        cy.visit('https://csb-x6dpt1.netlify.app/')
        cy.get('input').type("crs") 
        cy.get('.pagination').children('div').should('have.length', 3)
    })

    it('5- Go to page 2 and mark CRS-13 as a favorite', () => {
        cy.visit('https://csb-x6dpt1.netlify.app/')
        cy.get('input').type("crs") 
        cy.get('.pagination > :nth-child(3)').click()
        cy.get('h3').contains("CRS-13").parents().children('svg').click()
    })

    it('6- Go to the Favorite tab and check that CRS-13 is there.', () => {
        cy.visit('https://csb-x6dpt1.netlify.app/')
        cy.get('input').type("crs") 
        cy.get('.pagination > :nth-child(3)').click()
        cy.get('h3').contains("CRS-13").parents().children('svg').click()
        cy.get('div').contains("Favorites").click()
        cy.get('h3').contains("CRS-13").should('be.visible')
    })
    
    it('7- Refresh browser and check again for step 6.', () => {
        cy.visit('https://csb-x6dpt1.netlify.app/')
        cy.get('input').type("crs") 
        cy.get('.pagination > :nth-child(3)').click()
        cy.get('h3').contains("CRS-13").parents().children('svg').click()
        cy.get('div').contains("Favorites").click()
        cy.get('h3').contains("CRS-13").should('be.visible')
        cy.reload()
        cy.get('div').contains("Favorites").click()
        cy.get('h3').contains("CRS-13").should('be.visible')
    })
})