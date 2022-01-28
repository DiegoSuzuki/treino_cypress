class OpenHome {

    navigate() {

        cy.viewport(1920, 1080)
        cy.visit('https://www.kabum.com.br/')
        cy.url().should('contains', 'www.kabum.com.br')

    }

}

export default new OpenHome()