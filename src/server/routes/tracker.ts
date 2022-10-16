import Controllers from '../controllers';
import Route from './Route';
import HttpMethod from './HttpMethod';
import {Context} from 'koa';

export default (controllers: Controllers) => [
    new Route(HttpMethod.GET, '/', (ctx: Context) => controllers.page.tracker(ctx)),
    new Route(HttpMethod.POST, '/track', (ctx: Context) => controllers.tracker.track(ctx)),
];