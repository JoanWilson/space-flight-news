/// <reference types="cypress" />

const payloadUpdateArticle = require('../payloads/put-article.json');

const updateArticle = (idArticle) => {

    return cy.request({
        method: 'PUT',
        url: `/articles/${idArticle}`,
        failOnStatusCode: false,
        body: payloadUpdateArticle
    });
}

export { updateArticle };