import isEmail from 'validator';

export default {
  message: "Invalid email",
  handler: value => isEmail(value)
};
