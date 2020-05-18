<template>
  <Forme :schema="schema" @success="onSuccess">
    <button>Send</button>
  </Forme>
</template>

<script>
import Forme from "./Forme/index.vue";
import schema from "../schemas/example.js";

export default {
  components: {
    Forme
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