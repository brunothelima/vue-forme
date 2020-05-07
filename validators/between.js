
export default (min, max) => ({
  message: `This input must have ${limit} or more characters`,
  handler: value => value >= min && value <= max
});