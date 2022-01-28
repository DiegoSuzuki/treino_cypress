class SearchItem {

    find(product) {

        cy.get('#input-busca').type(product)        
        cy.get('#barraBuscaKabum > div > form > button').click()
        cy.url().should('contains', product)

    }

}

export default new SearchItem()