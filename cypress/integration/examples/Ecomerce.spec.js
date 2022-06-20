import Ecommerce from "./Ecommerce-locators";

describe('NGX Forms Feature', () => {
    const Ecom = new Ecommerce();

    before(() => {
        cy.visit('http://localhost:4200/')
    })

    context('Click on Search', () => {
        it('Should verify the search button is clickable', () => {
            Ecom.Clicksearch()
            .click()
        })
    })
})