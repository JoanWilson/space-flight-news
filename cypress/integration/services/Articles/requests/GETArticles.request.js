/// <reference types="cypress" />

const allArticles = () => {

    return cy.request({
        method: 'GET',
        url: '/articles',
        failOnStatusCode: false
    });
}

export { allArticles };