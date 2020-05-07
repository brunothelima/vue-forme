import matches from 'validator/es/lib/matches';

export default (comparison) => ({
  message: `Invalid format`,
  handler: value => matches(value, comparison)
});