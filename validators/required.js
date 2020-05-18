import isEmpty from 'validator';

export default {
  message: "This input is required",
  handler: value => isEmpty(value)
};
