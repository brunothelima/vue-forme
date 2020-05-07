import isCreditCard from 'validator/es/lib/isCreditCard';

export default {
  message: "Invalid credit card number",
  handler: value => isCreditCard(value)
};
