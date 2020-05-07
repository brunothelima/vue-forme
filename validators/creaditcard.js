import isCreditCard from 'validator/lib/isCreditCard';

export default {
  message: "Invalid credit card number",
  handler: value => isCreditCard(value)
};
