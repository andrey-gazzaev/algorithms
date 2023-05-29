import {generateSortedArray} from '../utils/generateSortedArray';
import {shuffle} from '../utils/shuffle';
import {mergeSort} from './mergeSort';

const sortedArray = generateSortedArray(10);

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);

  expect(mergeSort(unsortedArray)).toStrictEqual(sortedArray);
});
