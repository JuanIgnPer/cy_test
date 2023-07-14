
describe("challange", () => {
    it('Log numbers', () => {

        for(let i = 1; i < 101; i++ ){
            
            if(i % 15 == 0){
                cy.log("ab")    
            }
            else if (i % 3 == 0){
                cy.log("a")    
            }
            else if (i % 5 == 0){
                cy.log("b")    
            }
            else{
                cy.log(i)
            }

            // else if (i % 7 == 0){
            //     cy.log("c")    
            // }

            // 7c 11d 13e
            // 77 => cd 
        }
    })
})