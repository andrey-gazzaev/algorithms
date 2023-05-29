import {getMaxAndMin} from '../utils/getMaxAndMin';

export function countingSort(array: number[]): number[] {
  const {maxValue} = getMaxAndMin(array);

  const counter = new Array(maxValue + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    counter[array[i]] = counter[array[i]] + 1;
  }

  for (let i = 0, position = 0; i < maxValue + 1; i++) {
    for (let j = 0; j < counter[i]; j++) {
      array[position] = i;
      position++;
    }
  }
  return array;
}
