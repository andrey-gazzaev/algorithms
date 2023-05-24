import {swap} from '../utils/swap';

function getLeftChildIndex(index: number) {
  return 2 * index;
}

function getRightChildIndex(index: number) {
  return 2 * index + 1;
}

function maxHeapify(array: number[], nodeIndex: number) {
  const left = getLeftChildIndex(nodeIndex);
  const right = getRightChildIndex(nodeIndex);

  let max = -1;
  if (left <= array.length && array[left] > array[nodeIndex]) {
    max = left;
  } else {
    max = nodeIndex;
  }

  if (right <= array.length && array[right] > array[max]) {
    max = right;
  }
  if (max !== nodeIndex) {
    swap(array, nodeIndex, max);
    maxHeapify(array, max);
  }
}

/**
 * Heap sort.
 * @param array Sortable array.
 */
export function heapSort(array: number[]) {
  const unsortedArray = [...array];
  const result = [];
  for (let i = unsortedArray.length; i > 0; i--) {
    for (let j = Math.floor(i / 2); j >= 0; j--) {
      maxHeapify(unsortedArray, j);
    }

    result.push(unsortedArray[0]);
    unsortedArray.shift();
  }
  return result;
}
