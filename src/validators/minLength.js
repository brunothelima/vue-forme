
export default (limit) => ({
  message: `This input must have ${limit} or more characters`,
  handler: value => value.length >= limit
});