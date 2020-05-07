
export default (limit) => ({
  message: `This input must have ${limit} or fewer characters`,
  handler: value => value.length <= limit
});