<template>
  <pre class="highlight">
    <code ref="code"><slot /></code>
  </pre>
</template>

<script>
import hljs from "../../vendor/hljs.js";
import "../../vendor/hljs.css";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const code = ref(null);

    onMounted(() => {
      hljs.configure({useBR: true});
      hljs.highlightBlock(code.value)
    });

    return {
      code
    }
  }
};
</script>

<style scoped>
/* .highlight {
  margin: 0 0 0 1em;
} */
.hljs {
  padding: 2em 1em;
  border-radius: var(--forme-border-radius);
}
</style>