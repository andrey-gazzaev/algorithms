import {shuffle} from '../utils/shuffle';
import {countingSort} from './countingSort';

const sortedArray = [0, 0, 0, 1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9];

test('The array sorted', () => {
  const unsortedArray = shuffle([...sortedArray]);
  expect(countingSort(unsortedArray)).toStrictEqual(sortedArray);
});
