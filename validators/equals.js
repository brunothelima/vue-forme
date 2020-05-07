import equals from 'validator/lib/equals';

export default (comparison) => ({
  message: `Invalid format`,
  handler: value => matches(value, comparison)
});