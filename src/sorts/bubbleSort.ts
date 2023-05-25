import {swap} from '../utils/swap';

/**
 * Bubble sort.
 * @param array Sortable array.
 */
export function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}
