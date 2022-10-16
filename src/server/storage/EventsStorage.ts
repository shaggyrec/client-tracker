import TrackEvent from '../dataTypes/TrackEvent';
import { Db } from 'mongodb';

class EventsStorage {
    private db: Db;
    private readonly collectionName = 'events'

    public constructor(db: Db) {
        this.db = db;
    }

    public storeAll(events: TrackEvent[]): void {
        events.forEach(e => this.store(e));
    }

    public async store(event: TrackEvent): Promise<void> {
        this.db.collection(this.collectionName).insertOne(event).catch(e => console.log(e.message));
    }
}

export default EventsStorage;