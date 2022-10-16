interface TrackerInterface {
  track(event: string, ...tags: string[]): void;
}

export default TrackerInterface;
