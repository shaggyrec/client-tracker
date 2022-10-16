import Route from './Route';
import HttpMethod from './HttpMethod';
import Controllers from '../controllers';
import { Context } from 'koa';

export default (controllers: Controllers) => [
    new Route(HttpMethod.GET, '/', (ctx: Context) => controllers.page.main(ctx)),
    new Route(HttpMethod.GET, '/1.html', (ctx: Context) => controllers.page.main(ctx)),
    new Route(HttpMethod.GET, '/2.html', (ctx: Context) => controllers.page.main(ctx)),
];