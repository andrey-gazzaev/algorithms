import {generateSortedArray} from '../utils/generateSortedArray';
import {shuffle} from '../utils/shuffle';
import {insertionSort} from './insertionSort';

const sortedArray = generateSortedArray(10);

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);
  expect(insertionSort(unsortedArray)).toStrictEqual(sortedArray);
});
