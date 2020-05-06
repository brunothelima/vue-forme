<<<<<<< HEAD
import { createForme } from "@/composables/useForme";
import { required, minLength } from '@/validators'
=======
import { createForme } from "@/composables/useForme.js";
import { required } from "@/lib/validators.js";
>>>>>>> origin/basic-ui

const schema = createForme({
  inputText: {
    type: "text",
    label: "Text input",
    validations: { required },
    onInput: (ev, schema) => console.log(ev, schema)
  },
  inputSelect: {
    type: "select",
    label: "Select input",
    placeholder: "Select an option",
    options: [
      { value: 1, title: "First option" },
      { value: 2, title: "Second option" },
      { value: 3, title: "Third option" }
    ],
    validations: { required },
    onInput: (ev, schema) => console.log(ev, schema)
  },
  inputRadio: {
    type: "radio",
    label: "Radio input",
    options: [
      { value: 1, title: "First option" },
      { value: 2, title: "Second option" },
      { value: 3, title: "Third option" }
    ],
    validations: { required },
    onInput: (ev, schema) => console.log(ev, schema)
  },
  inputCheckbox: {
    type: "checkbox",
    label: "Checkbox input",
    title: "Click check the box",
    onInput: (ev, schema) => console.log(ev, schema)
  },
  inputTextarea: {
    type: "textarea",
    label: "Textarea input",
    validations: { required },
    onInput: (ev, schema) => console.log(ev, schema)
  },
});

export default schema;