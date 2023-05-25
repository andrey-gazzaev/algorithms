import {swap} from '../utils/swap';

function partition(array: number[], low: number, high: number): number {
  const pivot = array[high];

  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
}

/**
 * Quick sort.
 * @param array Sortable array.
 * @param low Start sorting index.
 * @param high End sorting index.
 */
export function quickSort(
  array: number[],
  low: number,
  high: number
): number[] {
  if (low < high) {
    const partitionIndex = partition(array, low, high);
    quickSort(array, low, partitionIndex - 1); // Before pi
    quickSort(array, partitionIndex + 1, high); // After pi
  }

  return array;
}
