<template>
  <vue-forme :schema="schema" @success="onSuccess">
    <button>Send</button>
  </vue-forme>
</template>

<script>
import Forme from "./Forme/index.vue";
// Schemas can also be imported as .js files
import schema from "../schemaExample.js";

export default {
  components: {
    "vue-forme": Forme
  },
  setup() {
    const onSuccess = ({ ev, data }) => {
      console.log(ev, data);
    };

    return {
      schema,
      onSuccess
    };
  }
};
</script>