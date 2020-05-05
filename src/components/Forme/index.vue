<template>
  <form @submit="onSubmitHandler">
    <field
      v-for="[name, input] in entries"
      :key="input.name"
      :id="`${name}Id`"
      :label="input.label"
      :errors="input.errors"
    >
      <component
        :is="getComponentByType(input.type)"
        :name="name"
        :type="input.type"
        :value="input.value"
        :disabled="input.disabled"
        :readonly="input.readonly"
        :placeholder="input.placeholder"
        :options="input.options"
        :title="input.title"
        @input="onInputHandler"
      />
    </field>
    <slot />
  </form>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useForme } from "@/composables/useForme.js";
import Field from "./Field";

// vue-forme ui components
const formeComponents = {
  "input-text": defineAsyncComponent(() => import("./Input/Text")),
  "input-select": defineAsyncComponent(() => import("./Input/Select")),
  "input-radio": defineAsyncComponent(() => import("./Input/Radio")),
  "input-checkbox": defineAsyncComponent(() => import("./Input/Checkbox")),
  "input-textarea": defineAsyncComponent(() => import("./Input/Textarea"))
};

export default {
  props: ["schema"],
  components: {
    Field,
    ...formeComponents
  },
  setup(props, context) {
    const { schema, data, validate } = useForme(props.schema);

    const entries = computed(() => Object.entries(schema));

    /**
     * Checks if the ui has a matching component for the input type
     * if not, returns an input-text as default.
     */
    const getComponentByType = type => {
      let name = `input-${type}`;
      return Object.keys(formeComponents).includes(name)
        ? `input-${type}`
        : "input-text";
    };

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onInputHandler = ev => {
      const { name, value } = ev.target;

      // Updating the schema input value
      schema[name].value = value;

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
      getComponentByType,
      entries,
    };
  }
};
</script>