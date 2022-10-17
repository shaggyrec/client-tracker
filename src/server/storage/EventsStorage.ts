import TrackEvent from "../dataTypes/TrackEvent";
import { Db } from "mongodb";

class EventsStorage {
  private db: Db;
  private readonly collectionName = "events";

  public constructor(db: Db) {
    this.db = db;
  }

  public store(events: TrackEvent[]): void {
    this.db
      .collection(this.collectionName)
      .insertMany(events)
      .catch((e) => console.log(e.message));
  }
}

export default EventsStorage;
