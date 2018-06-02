import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { environment } from "../environments/environment";


class App{
    public app: express.Application;
    public mongoUrl: string = environment.mongodb;
    
    constructor() {
        this.app = express();
        this.middleware(); 
        this.routes(); 
        this.database();    
    }

    private middleware(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        
    }

    private database(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
}

export default new App().app;