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

<style scoped>
.input-textarea {
  display: flex;
  align-items: center;
}
textarea {
  flex: 1;

  height: 10em;
  padding: 1em;
  
  box-sizing: border-box;
  border-radius: var(--forme-border-radius);
  border: 
    var(--forme-border-width) 
    var(--forme-border-style) 
    var(--forme-color-x-8);

  background-color: var(--forme-color-x-11);

  font-size: 1em;
  color: var(--forme-color-x-3);

  appearance: none;
  outline: none;
}
textarea:hover {
  border-color: var(--forme-color-x-7);
}
textarea:focus {
  border-color: var(--forme-color-x-4);
}
textarea::placeholder {
  color: var(--forme-color-x-7);
}
</style>
