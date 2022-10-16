import Page from './Page';
import Tracker from './Tracker';
import EventsStorage from '../storage/EventsStorage';

export default class {
    public page: Page;
    public tracker: Tracker;

    public constructor(pathToViews: string, eventStorage: EventsStorage) {
        this.page = new Page(pathToViews);
        this.tracker = new Tracker(eventStorage);
    }
}