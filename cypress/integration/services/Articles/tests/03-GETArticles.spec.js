import * as GETArticles from '../requests/GETArticles.request';

describe('GET All Articles', () => {
    it('Listar todos os artigos', () => {
        GETArticles.allArticles().should(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.not.null;
            
        })

    });
})
