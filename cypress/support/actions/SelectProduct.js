class SelectProduct {

    viewDetails() {

        cy.get('#listing > article > section > div.sc-iqVWFU.bxAhKr > div > main > div:nth-child(1)').click()        
        // cy.get('#barraBuscaKabum > div > form > button').click()
        // cy.url().should('contains', product)

    }

    clickbuy() {

        cy.get('main > div:nth-child(1) > div.sc-dkYRCH.bXfgDU > div.sc-fWCJzd.sc-dvQaRk.gzcMqR.dsAYhQ.availableFooterCardHover > button').click({ force: true })

    }

}

export default new SelectProduct()