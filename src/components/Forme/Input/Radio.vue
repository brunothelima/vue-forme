<template>
  <div class="input-radio">
    <div v-for="(option, index) in options" :key="option">
      <input
        type="radio"
        :id="`${name + index}Id`"
        :name="name"
        :value="option.value"
        :disabled="disabled"
        :readonly="readonly"
        :checked="option.value == value"
      />
      <label :for="`${name + index}Id`">{{option.title}}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "value", "options", "placeholder", "disabled", "readonly"],
};
</script>