import {swap} from '../utils/swap';

export function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      swap(array, j, j - 1);
    }
  }

  return array;
}
