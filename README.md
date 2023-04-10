# Vue JS - Notes

A vue file consist of three parts:-

- Template
- Script
- Style

#### Template

This will contain all the html stuff which is meant to rendered by the file. Any dynamic JS can be injected with the help of double curly brackets {{}}.

#### Script

Place where one can write js.

#### Style

Here we can write normal css in this tag. If we specify _scoped_ as an attribute to this tag, the css will be limited to this file only and will not leak out and affect other files.

_Tip:- Install a dev dependency called as **prettier-plugin-tailwindcss** for systematic arrangement of the utility classes!_

### COMPOSITION API

Starting vue with composition api.

```html
<script>
  export default {
    name: "name of the component", // Name of the component
    components: {
      component, // Imported component
    },
    data() {
      // Dynamic data
      return {
        company: "Google Careers";
      }
    },
  };
</script>
```

Every component present inside the vue project must have a default export object like the one specified above. In this method, you need to register the imported components under the components property else vue won't allow you to use that component inside the template.

### Unit Testing

It is a process where a component is tested individual and independently to checkout it's performance.
Every test file must end with '**_.test.js_**'.
