import matches from 'validator/lib/matches';

export default (pattern) => ({
  message: `Invalid format`,
  handler: value => matches(value, pattern)
});