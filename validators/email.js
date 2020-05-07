import isEmail from 'validator/es/lib/isEmail';

export default {
  message: "Invalid email",
  handler: value => isEmail(value)
};
