<template>
  <div class="input-textarea">
    <textarea
      :name="name"
      :id="`${name}Id`"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :value="value"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["name", "value", "placeholder", "disabled", "readonly"]
};
</script>

<style lang="scss" scoped>
.input-textarea {
  display: flex;
  position: relative;
  margin-bottom: 0.5rem;
  textarea {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    min-height: 10em;
    padding: 1em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: var(--color-x-11);
    color: var(--color-x-3);
    outline: none;
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
    }
  }
}
</style>
