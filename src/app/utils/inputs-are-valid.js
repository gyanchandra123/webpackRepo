export const inputsAreValid = (...input) => {
  console.log('running from the inputAreValid');
  return input.every(num => typeof num === "number" && !isNaN(num));
};
