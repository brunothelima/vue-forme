<template>
  <form @submit="onSubmit">
    <div>
      <label for>Username</label>
      <input type="text" v-model="username.value" />
      {{username.errors}}
    </div>
    <div>
      <label for>Password</label>
      <input type="password" v-model="password.value" />
      {{password.errors}}
    </div>
    <button>Send</button>
  </form>
</template>

<script>
import { toRefs } from "vue";
import { useForme, createForme } from "@/composables/useForme.js";
import { required, minLength } from "@/lib/validators.js";

const mySchema = createForme({
  username: {
    validations: {
      required
    }
  },
  password: {
    validations: {
      required,
      minLength: minLength(6)
    }
  }
});

export default {
  setup() {
    const { schema, data, validate } = useForme(mySchema);

    const onSubmit = async ev => {
      ev.preventDefault();

      const result = await validate();

      if (!result) {
        console.log("success", data.value);
      }
    };

    return {
      onSubmit,
      ...toRefs(schema)
    };
  }
};
</script>