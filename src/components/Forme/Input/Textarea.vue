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