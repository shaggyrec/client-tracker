import { Context } from "koa";
import Router from "koa-router";
import HttpMethod from "./HttpMethod";

class Route {
  private readonly path: string;
  private readonly action: (ctx: Context) => Promise<void>;
  private readonly method: HttpMethod;

  public constructor(
    method: HttpMethod,
    path: string,
    action: (ctx: Context) => Promise<void>
  ) {
    this.method = method;
    this.path = path;
    this.action = action;
  }

  public init(router: Router): void {
    router[this.method](this.path, this.action);
  }
}

export default Route;
