import matches from 'validator';

export default (pattern) => ({
  message: `Invalid format`,
  handler: value => matches(value, pattern)
});