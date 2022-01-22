import { Router } from 'express';

import HelloController from './controllers/HelloController';
import ArticlesController from './controllers/ArticlesController';

const routes = new Router();


//Hello Router
routes.get('/', HelloController.index);

//Articles Router
routes.get('/articles', ArticlesController.index);
routes.get('/articles/:id', ArticlesController.showById);
routes.post('/articles', ArticlesController.create);
routes.put('/articles/:id', ArticlesController.update);
routes.delete('/articles/:id', ArticlesController.delete);


export default routes;