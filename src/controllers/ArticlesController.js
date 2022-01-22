import Articles from '../models/Articles';

class ArticlesController {

    //Mostra todos os artigos
    async index(req, res) {
        try {
            const { page = 1, limit = 5 } = req.query;
            const articles = await Articles.find()
                .limit(limit *1)
                .skip((page-1)*limit);
            return res.json(articles);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async showById(req, res) {
        try {
            const { id } = req.params;
            const article = await Articles.findById(id);

            if (!article) {
                return res.status(404).render('<h1>Erro 404, não encontrado</h1>');
            } else {
                return res.json(article);
            }
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

    async update(req, res) {
        try {
            const { id } = req.params;
            const article = await Articles.findById(id);

            if (!article) {
                return res.status(404).render('<h1>Erro 404, não encontrado</h1>');
            } else {
                const articleUpdate = await Articles.findById(req.params.id);
                Object.assign(articleUpdate, req.body);
                articleUpdate.publishedAt = Date.now();
                articleUpdate.save();
                return res.status(201).json(articleUpdate);
            }
        }
        catch (error) {
            console.log(error.message);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const article = Articles.findById(id);

            if (!article) {
                return res.status(404).render('<h1>Erro 404, não encontrado</h1>');
            } else {
                await article.deleteOne();
                return res.status(200).json();
            }

        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

}

export default new ArticlesController();