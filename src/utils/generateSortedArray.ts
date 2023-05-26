export function generateSortedArray(size: number): number[] {
  return [...new Array(size)].map((_, i) => i);
}
