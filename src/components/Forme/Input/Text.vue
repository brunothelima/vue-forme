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

<style scoped>
.input-text {
  display: flex;
  align-items: center;
}
input {
  flex: 1;

  height: max(4vh, 3em);
  padding: 0 1em;
  
  box-sizing: border-box;
  border-radius: var(--forme-border-radius);
  border: 
    var(--forme-border-width) 
    var(--forme-border-style) 
    var(--forme-color-x-8);

  background-color: var(--forme-color-x-11);

  font-size: 1em;
  line-height: 1.2em;
  color: var(--forme-color-x-3);

  appearance: none;
  outline: none;
}
input:hover {
  border-color: var(--forme-color-x-7);
}
input:focus {
  border-color: var(--forme-color-x-4);
}
input::placeholder {
  color: var(--forme-color-x-7);
}
</style>
