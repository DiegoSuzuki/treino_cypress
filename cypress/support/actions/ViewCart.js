class ViewCart {

    goToCartPreCart() {

        cy.get('.cIZGKJ').should('have.text', 'IR PARA O CARRINHO')
        cy.get('.cIZGKJ').click()
        cy.url().should('eq', 'https://www.kabum.com.br/carrinho')

    }

}

export default new ViewCart()