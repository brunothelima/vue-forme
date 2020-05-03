<template>
  <form @submit="onSubmit">
    <div>data {{data}}</div>
    <div>errors {{errors}}</div>
    <br />
    <div>
      <label for>Username</label>
      <input type="text" v-model="schema.username.value" />
      <pre v-if="errors.username.length">{{errors.username}}</pre>
    </div>
    <div>
      <label for>Password</label>
      <input type="password" v-model="schema.password.value" />
      <pre v-if="errors.password.length">{{errors.password}}</pre>
    </div>
    <button>Send</button>
  </form>
</template>

<script>
import { useForme, createForme } from "../composables/useForme.js";
import { required, minLength } from '../validations.js'

const mySchema = createForme({
  username: {
    validations: { 
      required 
    }
  },
  password: {
    validations: { 
      required: { ...required, message: "Custom message" },
      minLength: minLength(6) 
    }
  }
});

export default {
  setup() {
    const { schema, data, errors, validate } = useForme(mySchema);

    const onSubmit = async ev => {
      ev.preventDefault();

      const denied = await validate();

      if (!denied) {
        console.log('success', data);
      }
    };

    return {
      data,
      schema,
      errors,
      onSubmit
    };
  }
};
</script>