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

export function quickSort(array: number[], low: number, high: number): void {
  if (low < high) {
    const pi = partition(array, low, high);
    quickSort(array, low, pi - 1); // Before pi
    quickSort(array, pi + 1, high); // After pi
  }
}
