import {generateSortedArray} from '../utils/generateSotredArray';
import {shuffle} from '../utils/shuffle';
import {heapSort} from './heapSort';

const sortedArray = generateSortedArray(10).reverse();

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);
  expect(heapSort(unsortedArray)).toStrictEqual(sortedArray);
});
