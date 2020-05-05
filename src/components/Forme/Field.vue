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