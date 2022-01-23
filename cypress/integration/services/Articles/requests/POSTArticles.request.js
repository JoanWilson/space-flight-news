/// <reference types="cypress" />

const payloadAddArticle = require('../payloads/add-article.json');

const addArticle = () => {

    return cy.request({
        method: 'Post',
        url: '/articles',
        failOnStatusCode: false,
        body: payloadAddArticle
    });
}

export { addArticle };