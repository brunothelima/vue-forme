<template>
  <forme :schema="formeSchema" @success="onSuccess">
    <button>Send</button>
  </forme>
</template>

<script>
import Forme from "./Forme/Forme.vue";
import formeSchema from "../formeSchema.js";

export default {
  components: {
    Forme
  },
  setup() {
    const onSuccess = ({ ev, data }) => {
      console.log(ev, data.value);
    };

    return {
      formeSchema,
      onSuccess
    };
  }
};
</script>