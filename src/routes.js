import { Router } from 'express';

import HelloController from './controllers/HelloController';
import ArticlesController from './controllers/ArticlesController';

const routes = new Router();


//Hello Router
routes.get('/', HelloController.index);

//Articles Router
routes.get('/articles', ArticlesController.index);
routes.post('/articles', ArticlesController.create);

export default routes;