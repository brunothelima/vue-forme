export default {
  message: "This input is required",
  handler: value => value != '' && value != null && value != undefined,
};
