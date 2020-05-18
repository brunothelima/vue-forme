import isNumeric from 'validator';

export default {
  message: "Invalid numeric value",
  handler: value => isNumeric(value)
};
