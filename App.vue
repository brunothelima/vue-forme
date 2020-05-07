<template>
  <div class="vue-forme">
    <div class="component">
      <component-example />
    </div>
    <div class="composable">
      <composable-example />
    </div>
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