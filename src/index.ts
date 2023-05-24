import {quickSort} from './sorts/quickSort';
import {generateSortedArray} from './utils/generateSotredArray';
import {shuffle} from './utils/shuffle';
import {timer} from './utils/timer';

const sortedArray = generateSortedArray(100_000).reverse();
const unsortedArray = shuffle([...sortedArray]);

timer(() => quickSort(unsortedArray, 0, unsortedArray.length - 1));
console.log(unsortedArray);
