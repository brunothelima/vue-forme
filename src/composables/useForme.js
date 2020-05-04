import cloneDeep from 'lodash/cloneDeep';
import { reactive, computed } from "vue";

/**
 * Insures the given schema object has the correct shape.
 */
export const createForme = source => {
  let schema = cloneDeep(source);
  for (let input of Object.values(schema)) {
    if (!("value" in input)) input.value = "";
    if (!("errors" in input)) input.errors = [];
  }
  return schema
};

export const useForme = source => {
  const schema = reactive(source);

  const data = computed(() => {
    return Object.keys(schema)
      .map(name => ({ [name]: schema[name].value || "" }))
      .reduce((prev, next) => ({ ...prev, ...next }));
  });

  const errors = computed(() => {
    return Object.keys(schema)
      .map(name => ({ [name]: schema[name].errors || [] }))
      .reduce((prev, next) => ({ ...prev, ...next }));
  });

  const validate = async () => {
    for (let name in schema) {

      if (!("validations" in schema[name])) {
        continue;
      }

      const input = schema[name];
      const { value, validations } = input;

      input.errors = [];

      for (let key in validations) {
        let { handler, message } = validations[key];

        let response = await handler(value);

        if (!response) {
          input.errors.push(message);
        }
      }
    }

    return !!Object.values(schema).some(input => input.errors.length > 0);
  };

  return {
    data,
    schema,
    errors,
    validate
  };
};