import isEmail from 'validator/lib/isEmail';

export default {
  message: "Invalid email",
  handler: value => isEmail(value)
};
