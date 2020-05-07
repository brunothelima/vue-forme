import matches from 'validator/es/lib/matches';

export default (pattern) => ({
  message: `Invalid format`,
  handler: value => matches(value, pattern)
});