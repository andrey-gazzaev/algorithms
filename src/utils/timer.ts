/** Allows you to time the operation of the function to be transferred. */
export const timer = function (fn: Function) {
  const startTime = new Date().valueOf();
  const result = fn();
  console.log(
    `Working time ${((new Date().valueOf() - startTime) * 0.001).toFixed(3)}s`
  );

  return result;
};
