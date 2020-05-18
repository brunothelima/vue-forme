import isURL from 'validator';

export default {
  message: "Url format invalid",
  handler: value => isURL(value)
};
