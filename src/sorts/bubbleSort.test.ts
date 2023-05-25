import {generateSortedArray} from '../utils/generateSotredArray';
import {shuffle} from '../utils/shuffle';
import {bubbleSort} from './bubbleSort';

const sortedArray = generateSortedArray(10).reverse();

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);
  expect(bubbleSort(unsortedArray)).toStrictEqual(sortedArray);
});
