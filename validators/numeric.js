import isNumeric from 'validator/lib/isNumeric';

export default {
  message: "Invalid numeric value",
  handler: value => isNumeric(value)
};
