# vue-forme
A vue3 solution for forms via composable function and component combo, built with the new VCA

Component/Composable function combo, for easy form handling in vuejs projects. This project is powered by the new vue componsition api, featured on vue3.

## Features:
  - Fast form ui development via <forme /> component
  - Open composable funcions for your own custom form component
  - Sync/Async input event callback handling
  - Sync/Async data validation 
  
## Using the ```<forme />``` component:
  The easiest way of start with forme is by using its ```<forme />``` component. Symply import the component into your code and give it a :schema to work with.
  
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
 This will generate the following form html:
 
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

## Using forme **createForme** and **useForme** functions:

  Complex forms always brings up complex customizations. That can make it dificult to work with 3rd party libraries. **Forme** uses it's own composable function to handle the ```<forme />``` component, and you can easily use it too! 
  
  With the **createForme** and **useForme** function, you can bring all forme's power to your own form component in the following way:

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
