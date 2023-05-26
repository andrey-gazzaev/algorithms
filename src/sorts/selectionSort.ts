import {getMaxAndMin} from '../utils/getMaxAndMin';
import {swap} from '../utils/swap';

export function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    const {maxValueIdx} = getMaxAndMin(array, 0, array.length - i);
    swap(array, maxValueIdx, array.length - i - 1);
  }
  return array;
}
