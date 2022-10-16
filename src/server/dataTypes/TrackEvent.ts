import TrackEventInterface from './TrackEventInterface';

class TrackEvent {
    public readonly name: string;
    public readonly tags: string[];
    public readonly url: string;
    public readonly title: string;
    public readonly ts: string;

    public static fromObject(o: TrackEventInterface)
    {
        return new TrackEvent(o.name, o.tags, o.url, o.title, o.ts);
    }

    public constructor(name: string, tags: string[], url: string, title: string, ts: string) {
        this.name = name;
        this.tags = tags;
        this.url = url;
        this.title = title;
        this.ts = ts;
    }
}

export default TrackEvent;