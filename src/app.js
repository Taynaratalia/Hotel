import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';


class App {
    constructor() {
        this.app = express();
        mongoose.connect('mongodb+srv://taynara:taynara@cluster0-qlyos.mongodb.net/hotel?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
      
    }

    routes() {
        this.app.use( routes);
    }

}

export default new App().app;