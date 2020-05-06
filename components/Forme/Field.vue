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
  padding: 0;
  margin: 0 1em 0 1em;
}
.field__errors li {
  margin-bottom: 0.5em;
}
</style>
