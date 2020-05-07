import isUrl from 'validator/lib/isUrl';

export default {
  message: "Url format invalid",
  handler: value => isUrl(value)
};
