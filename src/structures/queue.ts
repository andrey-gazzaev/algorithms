import {List} from './list';

export class Queue<T> {
  private readonly set: List<T>;

  /** Queue length. */
  public get length() {
    return this.set.toArray().length;
  }

  public constructor(...values: T[]) {
    this.set = values.length > 0 ? new List(...values) : new List();
  }

  /** Adds an item to the end of the queue. */
  public push(value: T): void {
    this.set.push(value);
  }

  /**
   * Deletes and returns an item from the beginning of the queue.
   * If the queue is empty, null value is returned.
   */
  public shift(): T | null {
    return this.set.shift();
  }
}
