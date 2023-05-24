export function isSorted(array: readonly number[]): boolean {
  if (array.length === 1 || array.length === 0) {
    return true;
  }

  for (let i = array.length; i > 0; i--) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
}
