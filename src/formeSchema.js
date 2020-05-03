import { createForme } from "./composables/useForme.js";

const schema = createForme({
  username: {
    type: "text",
    label: "Username",
    validations: {
      required: {
        message: "This input is required",
        handler: value => value != '' && value != null  && value != undefined,
      },
      // isUnique: {
      //   message: "This username already exists",
      //   handler: async (value) => {
      //     const request = await fetch("./is-unique-username", { body: { value: value }});
      //     return request.json();
      //   }
      // }
    }
  },
  password: {
    type: "password",
    label: "Password",
    // onInput: (ev, { username }) => {
      // username.disabled = true        
      // const response = await fetch("./async-value", { body: { value: ev.target.value }});
      // username.value = await response.json();
      // username.disabled = false
    // }  
  }
});

export default schema;