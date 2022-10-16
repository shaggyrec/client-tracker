import TrackerInterface from './TrackerInterface';
import TrackEvent from  './TrackEvent';

const TRACKER_URL = 'http://localhost:8001/track';

class Tracker implements TrackerInterface
{
    private readonly OBSERVER_INTERVAL = 1000;
    private readonly queue: Set<TrackEvent>;

    public constructor() {
        this.queue = new Set();
        this.runObserver();
    }

    public track(event: string, ...tags: string[]): void {
        this.queue.add(
            new TrackEvent(
                event,
                tags,
                location.href,
                document.title,
                (new Date()).toISOString()),
        );

        if (this.queue.size > 2) {
            this.sendQueue();
        }
    }

    private async sendQueue(): Promise<void> {
        if (this.queue.size === 0) {
            return;
        }
        const q = Array.from(this.queue);
        this.queue.clear();

        try {
            await fetch(
                TRACKER_URL,
                {
                    method: 'POST',
                    body: JSON.stringify(q)
                }
            );
        } catch (e) {
            q.forEach(e => this.queue.add(e));
        }

    }

    private runObserver(): void {
        setInterval(
            this.sendQueue.bind(this),
            this.OBSERVER_INTERVAL,
        );
    }


}

export default Tracker;