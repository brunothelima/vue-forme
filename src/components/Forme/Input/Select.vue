<template>
  <div class="input-select">
    <select :id="`${name}Id`" :name="name" :value="value" :disabled="disabled" :readonly="readonly">
      <option value="">{{placeholder}}</option>
      <option v-for="option in options" :key="option" :value="option.value">{{option.title}}</option>
    </select>
    <!-- <div class="input-select__selected" v-if="selected">{{ selected }}</div>
    <div class="input-select__placeholder" v-else>{{ placeholder || 'Select an option' }}</div> -->
  </div>
</template>

<script>
// import { computed } from "vue";

export default {
  props: ["name", "value", "options", "placeholder", "disabled", "readonly"],
  setup() {
    // const selected = computed(() => {
    //   let query = option => option.value.toString() === props.value;
    //   return props.options.find(query)?.title;
    // });

    // return {
    //   selected
    // };
  }
};
</script>