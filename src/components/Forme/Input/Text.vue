<template>
  <div class="input-text">
    <input
      :type="type" 
      :name="name" 
      :id="`${name}Id`"
      :value="value" 
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
    />  
  </div>
</template>

<script>
export default {
  props: ["name", "value", "type", "placeholder", "disabled", "readonly"]
}
</script>

<style lang="scss" scoped>
.input-text {
  display: flex;
  margin-bottom: 0.5rem;
  input {
    width: 100%;
    box-sizing: border-box;
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
