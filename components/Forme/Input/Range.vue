<template>
  <div class="input-text">
    <input
      type="range" 
      :name="name" 
      :id="`${name}Id`"
      :value="value" 
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
  margin: 6px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: 7.6px 7.6px 7.5px rgba(229, 231, 235, 0.1), 0px 0px 7.6px rgba(243, 244, 246, 0.1);
  background: #e5e7eb;
  border-radius: 3.2px;
  border: 0px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0.6px 0.6px 0.6px #768091, 0px 0px 0.6px #848d9c;
  border: 1px solid #8c95a3;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #f3f4f6;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  box-shadow: 7.6px 7.6px 7.5px rgba(229, 231, 235, 0.1), 0px 0px 7.6px rgba(243, 244, 246, 0.1);
  background: #e5e7eb;
  border-radius: 3.2px;
  border: 0px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0.6px 0.6px 0.6px #768091, 0px 0px 0.6px #848d9c;
  border: 1px solid #8c95a3;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #d7dae0;
  border: 0px solid #010101;
  border-radius: 6.4px;
  box-shadow: 7.6px 7.6px 7.5px rgba(229, 231, 235, 0.1), 0px 0px 7.6px rgba(243, 244, 246, 0.1);
}
input[type=range]::-ms-fill-upper {
  background: #e5e7eb;
  border: 0px solid #010101;
  border-radius: 6.4px;
  box-shadow: 7.6px 7.6px 7.5px rgba(229, 231, 235, 0.1), 0px 0px 7.6px rgba(243, 244, 246, 0.1);
}
input[type=range]::-ms-thumb {
  box-shadow: 0.6px 0.6px 0.6px #768091, 0px 0px 0.6px #848d9c;
  border: 1px solid #8c95a3;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  height: 8px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #e5e7eb;
}
input[type=range]:focus::-ms-fill-upper {
  background: #f3f4f6;
}

</style>