import isEmpty from 'validator/es/lib/isEmpty';

export default {
  message: "This input is required",
  handler: value => isEmpty(value)
};
