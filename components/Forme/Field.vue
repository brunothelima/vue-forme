<template>
  <div class="field">
    <label class="field__label" :for="id" v-if="label">{{label}}</label>
    <slot />
    <ul class="field__errors" v-if="errors && errors.length">
      <li v-for="message in errors" :key="message">
        {{message}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["id", "label", "errors"]
};
</script>

<style scoped>
.field {
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;
}
.field__label {
  margin: 0 0 0.75em 1em;
  font-weight: 600;
}
.field__errors {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 1em 0 0 1em;
  margin: 0.5em 0 0.5em 1em;
  
  border-bottom: var(--forme-border-width)  var(--forme-border-style) var(--forme-color-error);
  border-left: var(--forme-border-width)  var(--forme-border-style) var(--forme-color-error);

  border-bottom-left-radius: var(--forme-border-radius);
  padding: 1em 2em;
}
.field__errors li {
  margin: 0.25em 0;
}
</style>
