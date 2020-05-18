<template>
  <div class="input-range">
    <input
      type="range" 
      :name="name" 
      :id="`${name}Id`"
      :value="value || 0" 
      :disabled="disabled"
      :readonly="readonly"
      :step="step"
      :min="min"
      :max="max"
    />  
  </div>
</template>

<script>
export default {
  props: ["name", "value", "type", "placeholder", "disabled", "readonly", "step", "min", "max"]
}
</script>

<style>
input[type=range] {
  width: 100%;
  margin: 6px 0;
  -webkit-appearance: none;
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.33em;
  box-shadow: 0 0 0.1em var(--forme-color-x-4), 0 0 0.1em var(--forme-color-x-3);
  background: var(--forme-color-x-8);
  border-radius: 0.33em;
  cursor: pointer;
}
input[type=range]:focus::-webkit-slider-thumb {
  background: var(--forme-color-x-9);
}
input[type=range]::-webkit-slider-thumb {
  width: 1.8em;
  height: 1.8em;
  margin-top: -8px;
  background: var(--forme-color-x-11);
  border: 1px solid var(--forme-color-x-6);
  border-radius: 0.9em;
  box-shadow: 0 0 0.1em var(--forme-color-x-5), 0 0 0.1em var(--forme-color-x-6);
  cursor: pointer;
  -webkit-appearance: none;
}
</style>