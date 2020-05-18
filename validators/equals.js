import matches from 'validator';

export default (comparison) => ({
  message: `Invalid format`,
  handler: value => matches(value, comparison)
});