<template>
  <form @submit="onSubmit">
    <div>data {{data}}</div>
    <div>errors {{errors}}</div>
    <br />
    <div v-for="[name, input] in Object.entries(schema)" :key="name">
      <label>{{input.label}}</label>
      <component
        :is="`input-${input.type}`"
        :value="input.value"
        :name="name"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
      <pre v-if="input.errors.length">{{input.errors}}</pre>
    </div>
    <slot />
  </form>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useForme } from "../../composables/useForme.js";

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
      errors,
      data
    };
  }
};
</script>