import mongoose from 'mongoose';

import config from '../config/database';

class Database {
    constructor() {
        //Configuração padrão de conexão com Mongoose, Vide documentação mongoose
        this.connection = mongoose.connect(
            config.url,
            {
                useUnifiedTopology: true,
            }
        );
    }
}

export default new Database();