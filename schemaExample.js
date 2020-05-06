import { createForme } from "./composables/useForme.js";
import { required } from "./validators/index.js";

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
  inputRange: {
    type: "range",
    label: "Range input",
    min: 0,
    max: 40,
    step: 2,
    validations: { required },
    onInput: (ev, schema) => console.log(ev, schema)
  },
});

export default schema;