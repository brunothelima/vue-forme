export const required = {
  message: "This input is required",
  handler: value => value != '' && value != null && value != undefined,
};

export const minLength = limit => ({
  message: `This input must have ${limit} or more characters`,
  handler: value => value >= limit
});