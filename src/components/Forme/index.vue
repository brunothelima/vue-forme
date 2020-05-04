<template>
  <form @submit="onSubmit">
    <div v-for="[name, input] in entries" :key="name">
      <label>{{input.label}}</label>
      <component
        :is="`input-${input.type}`"
        :value="input.value"
        :name="name"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
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
    const { schema, data, errors, validate } = useForme(props.schema);

    const entries = computed(() => Object.entries(schema))
    
    const onBlur = ev => {
      const { name } = ev.target;

      schema[name].onBlur && schema[name].onBlur(ev, schema);
    };

    const onFocus = ev => {
      const { name } = ev.target;

      schema[name].onFocus && schema[name].onFocus(ev, schema);
    };

    const onInput = ev => {
      const { name, value } = ev.target;

      schema[name].value = value;

      schema[name].onInput && schema[name].onInput(ev, schema);
    };

    const onSubmit = async ev => {
      ev.preventDefault();

      context.emit("submit", { ev, data });

      const result = await validate();

      if (!result) {
        context.emit("success", { ev, data });
      }
    };

    return {
      onBlur,
      onFocus,
      onInput,
      onSubmit,
      entries,
      errors,
      data
    };
  }
};
</script>