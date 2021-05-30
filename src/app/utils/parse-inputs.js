export const parseInputs = (...input) => {
  console.log('running from the parseInputs');
  return input.map(str => parseInt(str));
};
