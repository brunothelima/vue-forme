<template>
  <pre class="highlight">
    <code ref="code"><slot /></code>
  </pre>
</template>

<script>
import { ref, onMounted } from "vue";
import hljs from "../../vendor/hljs.js";
import "../../vendor/hljs.css";

export default {
  setup() {
    const code = ref(null);

    onMounted(() => {
      hljs.highlightBlock(code.value);
    });

    return {
      code
    };
  }
};
</script>

<style scoped>
.hljs {
  padding: 2em 1em;
  border-radius: var(--forme-border-radius);
}
</style>