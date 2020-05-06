<template>
  <div class="input-radio">
    <div v-for="(option, index) in options" :key="option">
      <input
        type="radio"
        :id="`${name}Id:${index}`"
        :name="name"
        :value="option.value"
        :disabled="disabled"
        :readonly="readonly"
        :checked="option.value == value"
      />
      <label :for="`${name}Id:${index}`">{{option.title}}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "value", "options", "placeholder", "disabled", "readonly"],
};
</script>

<style>
.input-radio {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5em;
}
.input-radio > div {
  display: flex;
  align-items: baseline;
  margin: 0 0.5em 0.5em;
  min-width: 300px;
}
.input-radio > div input {
  margin-right: max(1em, 8px);
}
</style>