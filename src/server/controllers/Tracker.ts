import { Context } from "koa-bodyparser";
import EventsStorage from "../storage/EventsStorage";
import TrackEvent from "../dataTypes/TrackEvent";

class Tracker {
  private storage: EventsStorage;

  public constructor(storage: EventsStorage) {
    this.storage = storage;
  }

  public async track(ctx: Context): Promise<void> {
    this.storage.storeAll(
      ctx.request.body.map(
        ({ name, tags, url, title, ts }) =>
          new TrackEvent(name, tags, url, title, ts)
      )
    );

    ctx.status = 200;
    ctx.body = "ok";
  }
}

export default Tracker;
