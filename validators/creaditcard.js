import isCreditCard from 'validator';

export default {
  message: "Invalid credit card number",
  handler: value => isCreditCard(value)
};
