import isURL from 'validator/es/lib/isURL';

export default {
  message: "Url format invalid",
  handler: value => isURL(value)
};
