import cron from 'node-cron';
import Articles from '../models/Articles';

class CronJobs {
    constructor() {
        this.dailyArticle();
    }
    dailyArticle() {
        cron.schedule('0 8 * * *', () => {

            const dailyArticle = Articles.create({
                featured: true,
                title: 'Article das 8h am',
                url: '/dailyarticle/',
                imageUrl: 'www.img.com.br/img',
                newsSite: 'www.news.com.br',
                summary: 'Daily news',
                publishedAt: Date.now(),
                launches: [
                    {
                        provider: 'Daily'
                    }
                ],
                events: [
                    {
                        provider: 'Daily'
                    }
                ]
            })

            return console.log('Daily article has been published');
        })
    }
}


export default new CronJobs();