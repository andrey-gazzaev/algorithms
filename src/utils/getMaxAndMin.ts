export function getMaxAndMin(array: readonly number[]) {
  let maxValue = array[0];
  let minValue = array[0];
  if (array.length === 1) {
    return {maxValue, maxValueIdx: 0, minValue, mixValueIdx: 0};
  }

  let indexMaxValue = 0;
  let indexMinValue = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
      indexMaxValue = i;
    }

    if (array[i] < minValue) {
      minValue = array[i];
      indexMinValue = i;
    }
  }

  return {
    maxValue,
    maxValueIdx: indexMaxValue,
    minValue,
    mixValueIdx: indexMinValue,
  };
}
