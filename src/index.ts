import {bubbleSort} from './sorts/bubbleSort';
import {heapSort} from './sorts/heapSort';
import {insertionSort} from './sorts/insertionSort';
import {quickSort} from './sorts/quickSort';
import {selectionSort} from './sorts/selectionSort';
import {generateSortedArray} from './utils/generateSortedArray';
import {shuffle} from './utils/shuffle';
import {timer} from './utils/timer';

// const sortedArray = generateSortedArray(10).reverse();
// const sortedArray = generateSortedArray(100).reverse();
// const sortedArray = generateSortedArray(1_000).reverse();
// const sortedArray = generateSortedArray(25_000).reverse();
// const sortedArray = generateSortedArray(50_000).reverse();
const sortedArray = generateSortedArray(100_000).reverse();
// const sortedArray = generateSortedArray(200_000).reverse();
// const sortedArray = generateSortedArray(300_000).reverse();
const unsortedArray = shuffle([...sortedArray]);

timer('bubble sorting', () => bubbleSort([...unsortedArray]));
timer('heap sorting', () => heapSort([...unsortedArray]));
timer('quick sorting', () =>
  quickSort([...unsortedArray], 0, unsortedArray.length - 1)
);
timer('selection sorting', () => selectionSort([...unsortedArray]));
timer('insertion sort', () => {
  insertionSort([...unsortedArray]);
});
