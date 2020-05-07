import { reactive, computed } from "vue";

/**
 * Clones the given schema and insures it has the correct structure
 */
export const createForme = source => {
  for (let input of Object.values(source)) {
    if (!("value" in input)) input.value = "";
    if (!("errors" in input)) input.errors = [];
  }
  return source;
};

export const useForme = source => {
  // Reactive schema from the given schema
  const schema = reactive(source);

  /** 
   * Computed variable, containing a reduced object 
   * with the given schema inputs names as keys and 
   * the inputs current values as the keys values
   * 
   * Example:
   * 
   * console.log(data); 
   * // { 
   * //   name: 'My Name', 
   * //   email: 'my@email.com', 
   * //   ... 
   * // }
  */
  const data = computed(() => {
    return Object.keys(schema)
      .map(name => ({ [name]: schema[name].value || "" }))
      .reduce((prev, next) => ({ ...prev, ...next }));
  });

  /** 
   * Computed variable, containing a reduced object 
   * with only the given schema inputs names as keys and
   * and the inputs current errors array as their values
   * 
   * Example:
   * 
   * console.log(errors);
   * // { 
   * //   name: ['Required input', ...], 
   * //   email: ['Invalid e-mail', ... ], 
   * //   ... 
   * // }
  */
  const errors = computed(() => {
    return Object.keys(schema)
      .map(name => ({ [name]: schema[name].errors || [] }))
      .reduce((prev, next) => ({ ...prev, ...next }));
  });

  /**
   * This function iterates over each schema input, 
   * validating their values with their own validators.
   * 
   * It also populates their errors array
   * with all the failed validations messages.
   * 
   * After all validations are processed (sync/async), 
   * a boolean is returned as the result:
   * 
   * no errors found => true 
   * X errors found => false 
   */
  const validate = async () => {
    for (let name in schema) {
      let input = schema[name];
      
      let { value, validations } = input;
      
      input.errors = []; // Reseting the input errors array
 
      for (let key in validations) {
        let { handler, message } = validations[key];

        let error = await handler(value);

        if (error) {
          input.errors.push(message);
        }
      }
    }
    // Checks for any input that accused an error
    return !!Object.values(schema).some(input => input.errors.length > 0);
  };

  return {
    data,
    schema,
    errors,
    validate
  };
};