class ViewDetailsProduct {

    buy() {

        cy.contains('DESCRIÇÃO DO PRODUTO')
        cy.contains('COMPRAR').click()

    }

}

export default new ViewDetailsProduct()