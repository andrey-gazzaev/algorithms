function merge(leftArray: number[], rightArray: number[]) {
  const mergedArray = [];
  for (let i = 0, j = 0; i < leftArray.length || j < rightArray.length; ) {
    if (leftArray[i] === undefined && rightArray[j] !== undefined) {
      mergedArray.push(rightArray[j]);
      j++;
      continue;
    }

    if (rightArray[j] === undefined && leftArray[i] !== undefined) {
      mergedArray.push(leftArray[i]);
      i++;
      continue;
    }

    if (leftArray[i] <= rightArray[j]) {
      mergedArray.push(leftArray[i]);
      i++;
    } else {
      mergedArray.push(rightArray[j]);
      j++;
    }
  }
  return mergedArray;
}

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const halfLength = Math.round(array.length / 2);
  const leftArray = mergeSort(array.slice(0, halfLength));
  const rightArray = mergeSort(array.slice(halfLength, array.length));
  return merge(leftArray, rightArray);
}
