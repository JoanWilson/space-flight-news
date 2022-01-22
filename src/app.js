import express from 'express';
import cors from 'cors';
import cron from 'node-cron';

import Articles from './models/Articles';
import routes from './routes';

//Database exportada já instânciada
import './database/index';

import CronJobs from './services/CronJobs'; 

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(routes);
    }

    
}

export default new App().server;