export function swap<T>(array: T[], idx1: number, idx2: number) {
  [array[idx2], array[idx1]] = [array[idx1], array[idx2]];
}
