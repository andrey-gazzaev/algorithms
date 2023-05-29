export function generateRandomArray(size: number, max: number): number[] {
  return Array.from({length: size}, () => Math.floor(Math.random() * max));
}
