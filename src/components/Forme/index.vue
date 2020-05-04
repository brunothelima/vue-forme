<template>
  <form @submit="onSubmit">
    <div v-for="[name, input] in entries" :key="name">
      <label v-if="input.label">{{input.label}}</label>
      <component :is="`input-${input.type}`" :value="input.value" :name="name" @input="onInput" />
      <ul v-if="input.errors.length">
        <li v-for="error in input.errors" :key="error">{{error}}</li>
      </ul>
    </div>
    <slot />
  </form>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useForme } from "@/composables/useForme.js";

// vue-forme ui components
const InputText = defineAsyncComponent(() => import("./InputText.vue"));
const InputPassword = defineAsyncComponent(() => import("./InputPassword.vue"));

export default {
  props: ["schema"],
  components: {
    InputText,
    InputPassword
  },
  setup(props, context) {
    const { schema, data, validate } = useForme(props.schema);

    const entries = computed(() => Object.entries(schema));

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onInput = ev => {
      const { name, value } = ev.target;

      // Updating the schema input value
      schema[name].value = value;

      // Checking and calling the event calback function
      schema[name].onInput && schema[name].onInput(ev, schema);
    };

    const onSubmit = async ev => {
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
      onInput,
      onSubmit,
      entries
    };
  }
};
</script>