import * as PUTArticles from '../requests/PUTArticles.request';
import * as POSTArticles from '../requests/POSTArticles.request';
import * as GETArticles from '../requests/GETArticles.request';
import * as DELETEArticles from '../requests/DELETEArticles.request';


describe('PUT Articles', () => {
    it('Mudança dos dados de um artigo', () => {
        GETArticles.allArticles().then(resAllArticles => {
            POSTArticles.addArticle().should( res => {
                expect(res.status).to.eq(201);
                expect(res.body.title).to.eq('Teste da Api');
            })
            PUTArticles.updateArticle(resAllArticles.body[0]._id).should(resUpdateArticle => {
                expect(resUpdateArticle.status).to.eq(201);
                expect(resUpdateArticle.body).to.be.not.null;
                cy.log(resUpdateArticle.body)
                expect(resUpdateArticle.body.title).to.eq('Teste da Api - Alterado');
            })
            GETArticles.allArticles().then(resAllArticles => {
                DELETEArticles.deleteArticle(resAllArticles.body[0]._id).should(resDeleteArticle => {
                    expect(resDeleteArticle.status).to.eq(200);
                })
            })
        })
    });
})
