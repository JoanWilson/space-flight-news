import * as DELETEArticles from '../requests/DELETEArticles.request';
import * as GETArticles from '../requests/GETArticles.request';
import * as POSTArticles from '../requests/POSTArticles.request';

describe('DELETE Articles', () => {
    it('Deletar um artigo', () => {
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
