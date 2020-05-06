<template>
  <div class="input-select">
    <select :id="`${name}Id`" :name="name" :value="value" :disabled="disabled" :readonly="readonly">
      <option v-for="option in options" :key="option" :value="option.value">{{option.title}}</option>
    </select>
    <div class="input-select__selected" v-if="selected">{{ selected }}</div>
    <div class="input-select__placeholder" v-else>{{ placeholder || 'Select an option' }}</div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["name", "value", "options", "placeholder", "disabled", "readonly"],
  setup(props) {
    const selected = computed(() => {
      let query = option => option.value.toString() === props.value;
      return props.options.find(query)?.title;
    });

    return {
      selected
    };
  }
};
</script>

<style scoped>
.input-select {
  position: relative;
  display: flex;
  align-items: center;

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
.input-select::after {
  content: ' \25BE';
  color: var(--forme-color-x-7);
}
.input-select:hover {
  border-color: var(--forme-color-x-7);
}
.input-select:active {
  border-color: var(--forme-color-x-4);
}

select {
  position: absolute;
  opacity: 0;

  left: 0; top: 0;
  width: 100%;
  height: 100%;
}

.input-select__selected,
.input-select__placeholder {
  flex: 1;
}
.input-select__placeholder {
  color: var(--forme-color-x-7);
}
</style>