import { List } from "./list";

export class Stack<T> {
  private readonly set: List<T>

  /** Stack length. */
  public get length() {
    return this.set.toArray().length;
  }

  public constructor(...values: T[]) {
    this.set = values.length > 0 ? new List(...values) : new List();
  }

  /** Adds an item to the end of the stack. */
  public push(value: T): void {
    this.set.push(value);
  }

  /**
   * Deletes and returns an item from the end of the stack.
   * If the stack is empty, null value is returned.
   */
  public pop(): T | null {
    return this.set.pop();
  }
}
