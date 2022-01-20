import { Router } from 'express';
import res from 'express/lib/response';

import HelloController from './controllers/HelloController';

const routes = new Router();


//Hello Router
routes.get('/', HelloController.index);

export default routes;