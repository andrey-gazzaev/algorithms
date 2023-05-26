import {generateSortedArray} from '../utils/generateSortedArray';
import {shuffle} from '../utils/shuffle';
import {selectionSort} from './selectionSort';

const sortedArray = generateSortedArray(10);

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);

  expect(selectionSort(unsortedArray)).toStrictEqual(sortedArray);
});
