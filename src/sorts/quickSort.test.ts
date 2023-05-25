import {generateSortedArray} from '../utils/generateSotredArray';
import {shuffle} from '../utils/shuffle';

import {quickSort} from './quickSort';

const sortedArray = generateSortedArray(10);

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);

  expect(quickSort(unsortedArray, 0, unsortedArray.length - 1)).toStrictEqual(
    sortedArray
  );
});
