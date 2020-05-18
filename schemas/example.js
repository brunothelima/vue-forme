import { createForme } from "../composables/useForme.js";
import { required } from "../validators/index.js";

interface FormeSchema {
  [inputName: string]: FormeInputTypes
}

// Inputs
interface FormeInput {
  type: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  validations?: FormeValidationsType;
  onInput: FormeOnInputEvent;
}

interface FormeInputText extends FormeInput {
  placeholder?: string;
}

interface FormeInputTextarea extends FormeInput {
  placeholder?: string;
}

interface FormeInputSelect extends FormeInput {
  placeholder?: string;
  options: Array<{value: string | number, label: string}>
}

interface FormeInputRadio extends FormeInput {
  placeholder?: string;
  options: Array<{value: string | number, label: string}>
}

interface FormeInputCheckbox extends FormeInput {
  title: string;
}

interface FormeInputRange extends FormeInput {
  min: number;
  max: number;
  step: number;
  placeholder?: string;
}

export interface FormeOnInputEvent {
  (ev: any, schema: FormeSchema): void;
}

type FormeInputTypes = FormeInputText | FormeInputTextarea | FormeInputSelect | FormeInputRadio | FormeInputCheckbox | FormeInputRange;

// Validations
interface FormeValidation {
  (message: string, handler: FormeValidationHandler)
}

interface FormeValidationHandler {
  (value: any): boolean
}

interface FormeValidationsType {
  [validationName: string]: FormeValidation
}

const schema: FormeSchema = {
  inputText: {
    type: "text",
    label: "Text input",
    validations: { required },
    onInput: (ev, schema) => {
      console.log(ev)
    }
  },
  inputSelect: {
    type: "select",
    label: "Select input",
    placeholder: "Select an option",
    options: [
      { value: 1, label: "First option" },
      { value: 2, label: "Second option" },
      { value: 3, label: "Third option" }
    ],
    validations: { required },
    onInput: (ev, schema) => console.log(ev, schema)
  },
  inputRadio: {
    type: "radio",
    label: "Radio input",
    options: [
      { value: 1, label: "First option" },
      { value: 2, label: "Second option" },
      { value: 3, label: "Third option" }
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
}

export default schema;