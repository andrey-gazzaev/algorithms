interface ListItem<T> {
  prev: ListItem<T> | null;
  next: ListItem<T> | null;
  value: T;
}

export class List<T> {
  private first: ListItem<T> | null = null;
  private last: ListItem<T> | null = null;

  public constructor(...values: readonly T[]) {
    values.forEach(value => {
      this.push(value);
    });
  }

  /** Transforms list to array. */
  public toArray(): T[] {
    if (this.first === null) {
      return [];
    }
    const values: T[] = [];
    for (const item of this) {
      if (item === null) {
        return values;
      }
      values.push(item);
    }
    return values;
  }

  /**
   * Gets list item by condition.
   * @param condition Search condition for a list item
   */
  public get(condition: (value: T) => boolean): T | null {
    if (this.first === null) {
      return null;
    }
    let currentItem: ListItem<T> | null = this.first;
    while (currentItem !== null && !condition(currentItem.value)) {
      currentItem = currentItem.next;
    }
    return currentItem === null ? null : currentItem.value;
  }

  /** Adds the specified value to the end of a list. */
  public push(value: T): T {
    const listItem: ListItem<T> = {
      prev: this.last,
      next: null,
      value,
    };

    if (this.last === null) {
      this.first = listItem;
      this.last = listItem;
    } else {
      this.last.next = listItem;
      this.last = listItem;
    }
    return value;
  }

  /** Removes the last element from a list.  */
  public pop(): T | null {
    if (this.last === null) {
      return null;
    }

    const value = this.last.value;
    this.last = this.last.prev;
    if (this.last !== null) {
      this.last.next = null;
    }
    return value;
  }

  /** Adds the specified value to the beginning of a list. */
  public unshift(value: T): T {
    const listItem: ListItem<T> = {
      prev: null,
      next: this.first,
      value,
    };

    if (this.first === null) {
      this.first = listItem;
      this.last = listItem;
    } else {
      this.first.prev = listItem;
      this.first = listItem;
    }

    return value;
  }

  /** Removes the first element from a list.  */
  public shift(): T | null {
    if (this.first === null) {
      return null;
    }
    const value = this.first.value;
    this.first = this.first.next;
    if (this.first !== null) {
      this.first.prev = null;
    }
    return value;
  }

  /** Executes a provided function once for each list item. */
  public forEach(fn: (value: T) => unknown): void {
    for (const item of this) {
      if (item === null) {
        return;
      }
      fn(item);
    }
  }

  /** Creates a new list populated with the results of calling a provided function on every item in the calling list. */
  public map<R>(fn: (value: T) => R): List<R> {
    const transformedList = new List<R>();
    for (const item of this) {
      if (item === null) {
        return transformedList;
      }
      transformedList.push(fn(item));
    }
    return transformedList;
  }

  /**
   * Implements the iterable protocol and allows lists to be consumed by most syntaxes expecting iterables,
   * such as the spread syntax and for...of loops.
   */
  public [Symbol.iterator]() {
    let nextItem = this.first;
    return {
      next: () => {
        if (nextItem !== null) {
          const result = {value: nextItem.value, done: false};
          nextItem = nextItem.next;
          return result;
        }
        return {value: null, done: true};
      },
    };
  }
}
