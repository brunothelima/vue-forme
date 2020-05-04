<template>
  <forme :schema="schema" @success="onSuccess">
    <button>Send</button>
  </forme>
</template>

<script>
import Forme from "@/components/Forme";
import schema from "@/schemaExample.js";

export default {
  components: {
    Forme
  },
  setup() {
    const onSuccess = ({ ev, data }) => {
      console.log(ev, data.value);
    };

    return {
      schema,
      onSuccess
    };
  }
};
</script>