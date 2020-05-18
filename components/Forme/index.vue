<template>
  <form @submit="onSubmitHandler" class="forme">
    <pre>data: {{data}}</pre>
    <br />
    <Field
      v-for="[name, input] in entries"
      :key="input.name"
      :id="`${name}Id`"
      :label="input.label"
      :errors="input.errors"
    >
      <component :is="`input-${input.type}`" :name="name" v-bind="input" @input="onInputHandler" />
    </Field>
    <slot />
  </form>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useForme } from "../../composables/useForme.js";
import Field from "./Field.vue";
import "../../assets/theme.css";

// Forme elements components
const UIComponents = {
  "input-text": defineAsyncComponent(() => import("./Input/Text.vue")),
  "input-radio": defineAsyncComponent(() => import("./Input/Radio.vue")),
  "input-range": defineAsyncComponent(() => import("./Input/Range.vue")),
  "input-select": defineAsyncComponent(() => import("./Input/Select.vue")),
  "input-checkbox": defineAsyncComponent(() => import("./Input/Checkbox.vue")),
  "input-textarea": defineAsyncComponent(() => import("./Input/Textarea.vue"))
};

export default {
  props: ["schema"],
  components: {
    Field,
    ...UIComponents
  },
  setup(props, context) {
    const { schema, data, validate } = useForme(props.schema);

    const entries = computed(() => Object.entries(schema));

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onInputHandler = ev => {      
      const { name, value } = ev.target;

      // Updating the schema input value
      schema[name].value = value;
      schema[name].errors = [];

      // Checking and calling the event calback function
      schema[name].onInput && schema[name].onInput(ev, schema);
    };

    const onSubmitHandler = async ev => {
      ev.preventDefault();

      context.emit("submit", { ev, data: data.value });

      // Awaits for the validation result
      const result = await validate();

      if (!result) {
        // Emiting success event if no error is found
        context.emit("success", { ev, data: data.value });
      }
    };

    return {
      onInputHandler,
      onSubmitHandler,
      entries,
      data
    };
  }
};
</script>