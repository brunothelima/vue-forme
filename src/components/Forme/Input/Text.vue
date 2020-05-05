<template>
  <div class="input-text">
    <input
      :type="type" 
      :name="name" 
      :id="`${name}Id`"
      :value="value" 
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
    />  
  </div>
</template>

<script>
export default {
  props: ["name", "value", "type", "placeholder", "disabled", "readonly"]
}
</script>