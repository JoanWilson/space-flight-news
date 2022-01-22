import Articles from '../models/Articles';

class ArticlesController {

    //Mostra todos os artigos
    async index(req, res) {
        try {
            const articles = await Articles.find();
            return res.json(articles);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async create(req, res) {
        try {
            
            const {
                featured,
                title,
                url,
                imageUrl,
                newsSite,
                summary,
                publishedAt,
                launches,
                events
            } = req.body;

            const newArticle = await Articles.create({
                featured,
                title,
                url,
                imageUrl,
                newsSite,
                summary,
                publishedAt: Date.now(),
                launches,
                events
            
            })

            return res.status(201).json(newArticle);
            
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

}

export default new ArticlesController();