import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Route from './routes/Route';
import Controllers from './controllers';
import { Db } from 'mongodb';
import EventsStorage from "./storage/EventsStorage";

class Application {
    private koa;
    private readonly router: Router;
    private db: Db;

    public constructor(koa: Koa, routes: (c: Controllers) => Route[], pathToViews: string, db: Db = undefined) {
        this.koa = koa;
        this.db = db;
        this.router = new Router();
        this.setUpRoutes(routes(new Controllers(pathToViews, new EventsStorage(this.db))));
    }

    public run(port: string, name: string) {
        this.applyMiddlewares();
        this.koa.listen(
            port,
            () => console.log(`${name} run on the ${port} port`),
        )
    }

    private applyMiddlewares(): void {
        this.koa.use(cors());
        this.koa.use(bodyParser({
            enableTypes: ['text', 'json'],
            extendTypes: {
                json: ['text/plain'],
            }
        }));
        this.koa.use(this.router.routes());
    }

    private setUpRoutes(routes: Route[]): void {
        routes.forEach((r: Route) => r.init(this.router));
    }
}

export default Application;