class indexPage{
    constructor(){
        //Elementos
        this.searchBox = '#nav-search-input';
        this.searchMagnifier = '.nav-icon-search';
    }

    //Metodos para interacciones
    search = (element) => {
        cy.get(this.searchBox).type(element);
        cy.get(this.searchMagnifier).click();        
    }
}
export default new indexPage();