import * as POSTArticles from '../requests/POSTArticles.request';
import * as GETArticles from '../requests/GETArticles.request';
import * as DELETEArticles from '../requests/DELETEArticles.request';

context('POST Articles', () => {
    it('Adicionar um novo artigo', () => {
        POSTArticles.addArticle().should( res => {
            expect(res.status).to.eq(201);
            expect(res.body.title).to.eq('Teste da Api');
        })
        GETArticles.allArticles().then(resAllArticles => {
            DELETEArticles.deleteArticle(resAllArticles.body[0]._id).should(resDeleteArticle => {
                expect(resDeleteArticle.status).to.eq(200);
            })
        })
    });
})
