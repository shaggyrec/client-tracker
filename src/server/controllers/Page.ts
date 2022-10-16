import { createReadStream } from "fs";
import { Context } from "koa";

class Page {
  private readonly pathToViews: string;

  constructor(pathToViews: string) {
    this.pathToViews = pathToViews;
  }

  public async main(ctx: Context): Promise<void> {
    ctx.type = "html";
    ctx.body = await createReadStream(this.pathToViews + "/main.html");
  }

  public async tracker(ctx: Context): Promise<void> {
    ctx.type = "application/javascript";
    ctx.body = await createReadStream(__dirname + "/../../client/client.js");
  }
}

export default Page;
