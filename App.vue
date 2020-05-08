<template>
  <div class="vue-forme">
    <ComponentExample />
    <!-- <ComposableExample /> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ComponentExample from "./components/ComponentExample.vue";
import ComposableExample from "./components/ComposableExample.vue";

export default {
  components: {
    ComponentExample,
    ComposableExample
  }
};
</script>