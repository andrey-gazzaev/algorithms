import {bubbleSort} from './sorts/bubbleSort';
import {heapSort} from './sorts/heapSort';
import {quickSort} from './sorts/quickSort';
import {generateSortedArray} from './utils/generateSotredArray';
import {shuffle} from './utils/shuffle';
import {timer} from './utils/timer';

const sortedArray = generateSortedArray(200_000).reverse();
const unsortedArray = shuffle([...sortedArray]);

timer(() => bubbleSort([...unsortedArray]));
timer(() => heapSort([...unsortedArray]));
timer(() => quickSort([...unsortedArray], 0, unsortedArray.length));
