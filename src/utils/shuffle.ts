import {swap} from './swap';

/** Fisher-Yates (aka Knuth) Shuffle. */
export function shuffle<T>(array: T[]) {
  for (let i = array.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    swap(array, i, randomIndex);
  }

  return array;
}
