/// <reference types="cypress" />

const deleteArticle = (idArticle) => {

    return cy.request({
        method: 'DELETE',
        url: `/articles/${idArticle}`,
        failOnStatusCode: false
    });
}

export { deleteArticle };