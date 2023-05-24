import {heapSort} from './sorts/heapSort';
import {generateSortedArray} from './utils/generateSotredArray';
import {shuffle} from './utils/shuffle';
import {timer} from './utils/timer';

const sortedArray = generateSortedArray(100_000).reverse();
const unsortedArray = shuffle([...sortedArray]);

console.log(timer(() => heapSort(unsortedArray)));
