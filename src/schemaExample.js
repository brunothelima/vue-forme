import { createForme } from "@/composables/useForme";
import { required, minLength } from '@/validators'

const schema = createForme({
  username: {
    type: "text",
    label: "Username",
    validations: {
      required,
    }
  },
  password: {
    type: "password",
    label: "Password",
    validations: {
      required,
      minLength: minLength(6)
    }
  }
});

export default schema;