class TrackEvent {
    private readonly name: string;
    private readonly tags: string[];
    private readonly url: string;
    private readonly title: string;
    private readonly ts: string;

    public constructor(name: string, tags: string[], url: string, title: string, ts: string) {
        this.name = name;
        this.tags = tags;
        this.url = url;
        this.title = title;
        this.ts = ts;
    }
}

export default TrackEvent;