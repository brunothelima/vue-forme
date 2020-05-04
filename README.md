# vue-forme
Form handling solution for vuejs projects, powered by vue3 composition api.

## Features:
  - Fast form ui development via ```<forme />``` component
  - Input sync/async event callback handling
  - Data validation
    - Input value async validation support
    - Custom validations support
  - Open composable functions ```createForme``` and ```useForme``` for custom form components
  
## Basic usage with ```<forme />``` component:
  The easiest way to start with forme is by using it's ```<forme />``` component. Symply import it into your code and give it a schema object to work with, like in the example below.
  
  **MyCustomForm.vue**
  ```html
 <template>
  <forme :schema="formeSchema" @success="onSuccess">
    <button>Send</button>
  </forme>
</template>

<script>
import Forme from "vue-forme";
import formeSchema from "formeSchema.js";

export default {
  components: {
    Forme
  },
  setup() {
    const onSuccess = ({ ev, data }) => {
      console.log(ev, data.value); // { username: value, email: value, ... }
    };

    return {
      formeSchema,
      onSuccess
    };
  }
};
</script>
  ```
  
  **formSchema.js**
  ```js
import { createForme } from "vue-forme";
import { required, minLength } from "vue-forme/validations";

const schema = createForme({
  username: {
    type: "text",
    label: "Username",
    validations: {
      required
    }
  },
  password: {
    type: "password",
    label: "Password",
    validations: {
      required,
      minLength: minLength(6)
    },
    onInput: (ev, schema) => {
      console.log(ev.target.value) // @input event callback
    }  
  }
});

export default schema;
  ```
 This will generate the following html:
 
 ```html
 <form>
   <div>
      <label>Username</label>
      <input type="text" name="username">
      <!-- After validation fails:
      <ul>
        <li>This input is required</li>
      </ul> -->
   </div>
   <div>
      <label>Password</label>
      <input type="text" name="password">
      <!-- After validation fails:
      <ul>
        <li>This input is required</li>
        <li>This input must have 6 or more characters</li>
      </ul> -->
   </div>
   <button>Send</button>
</form>
 ```

## Using ```createForme``` and ```useForme``` functions:

  Complex form ui's always brings up complex customizations and that can make it realy hard to work with 3rd party libraries. **vue-forme** uses it's own composable functions to handle that inside the ```<forme />``` component, and you can easily use it on your own form components too! 
  
  With ```createForme``` and ```useForme``` functions, you can bring all forme's power to your own form, by following the exemple below:

```html
<template>
  <form @submit.prevent="onSubmit">
    <label for>Username</label>
    <input type="text" v-model="schema.username.value" /> <!-- Bind the schema object -->
    <pre>{{schema.username.errors}}</pre> <!-- Detected errors array on validate() -->
    <button>Submit</button>
  </form>
</template>

<script>
import { useForme, createForme } from "vue-forme";
import { required } from "vue-forme/validations";
// 
const formeSchema = createForme({
  username: {
    value: 'initial value',
    validations: { required }
  }
});

export default {
  setup() {
    const { schema, data, validate } = useForme(formeSchema);

    const onSubmit = ev => {
      const response = validate();
      if (response) console.log('success', data.value);
    };
  }
};
</script>
```
