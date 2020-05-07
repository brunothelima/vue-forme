import isNumeric from 'validator/es/lib/isNumeric';

export default {
  message: "Invalid numeric value",
  handler: value => isNumeric(value)
};
