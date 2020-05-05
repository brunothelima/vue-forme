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

<style lang="scss" scoped>
.field {
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;
  &__label {
    margin: 0 0 0.5rem 1rem;
    font-weight: 600;
    &:empty {
      display: none;
    }
  }
  &__errors {
    padding: 0;
    margin: 0 1rem 0 1rem;
    li {
      margin-bottom: 0.5em;
    }
  }
}
</style>
