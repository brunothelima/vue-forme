<template>
  <div class="input-checkbox">
    <input
      type="checkbox"
      :name="name"
      :id="`${name}Id:check`"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$event.target.value = +$event.target.checked"
    />
    <label :for="`${name}Id:check`">{{title}}</label>
  </div>
</template>

<script>
export default {
  props: ["name", "value", "title", "disabled", "readonly"]
};
</script>

<style>
.input-checkbox {
  display: flex;
  align-items: baseline;
}
.input-checkbox input {
  margin-right: max(1em, 8px);
}
</style>