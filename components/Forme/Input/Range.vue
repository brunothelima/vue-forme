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
  -webkit-appearance: none;
  width: 100%;
  margin: 9px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #babfc8, 0px 0px 1px #c8ccd3;
  background: #e5e7eb;
  border-radius: 8px;
  border: 0px solid #e5e7eb;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #babfc8, 0px 0px 1px #c8ccd3;
  border: 1px solid #e5e7eb;
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #e8eaed;
}
</style>