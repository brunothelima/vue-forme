import isEmpty from 'validator/lib/isEmpty';

export default {
  message: "This input is required",
  handler: value => isEmpty(value)
};
