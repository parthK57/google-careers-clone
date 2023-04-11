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

It is a process where a component is tested individually and independently to checkout it's performance. Every test file must end with '**_.test.js_**'.

##### Vitest

It is a JS testing library.

##### Describe

It is a function to organize your tests into categories.

##### It

It is a function to declare the logic you are testing.

##### Expect

Here is were the assertion takes place.

Example-

```js
// File: Playground.test.js
import { describe, it, expect } from "vitest";

// Name of the component to be tested
describe("basic math", () => {
  // What is being tested
  it("adds two numbers", () => {
    // Actual test
    expect(1 + 1).toBe(2);
  });

  // Checks the evenOrOdd func
  describe("evenOrOdd", () => {
    // Checks whether num is E or O
    it("checks even or odd", () => {
      // Testing Odd Case
      expect(evenOrOdd(3)).toBe("Odd");
      // Testing Even Case
      expect(evenOrOdd(2)).toBe("Even");
    });
  });
});
```

_Tip: Install **@vitest/coverage-c8** for generating code coverage report of the tests!_

#### v-bind

Connects html-attribute to a dynaminc data. Syntax:-

```html
<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <!-- V BIND on href -->
        <a class="flex h-full items-center text-xl" :href="url">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "MainNav",
    data() {
      return {
        company: "Google Careers",
        url: "https://careers.google.com",
      };
    },
  };
</script>
```

#### v-for

Runs a forloop on an element, just like map in react. Syntax:-

```html
<div v-for="car in garage" :key="car">{{ car }}</div>
```

#### v-if, v-else-if, v-else

Conditional rendering of the template element. Syntax:-

```html
<button v-if="true">Sign In</button>
```

#### v-on:"event"

Event based logic. Syntax:-

```html
<button v-if="true" v-on="handleClick">Sign In</button>
```

#### Props

Just like react you can pass props in vue too, they are nothing but a value passed by the parent component. Syntax:-

```html
<!-- Parent Component -->
<div class="ml-auto flex h-full items-center">
  <ActionButton v-if="!isLoggedIn" text="Sign In" @:click="handleClick" />
  <ProfileImage v-else />
</div>

<!-- Child Component -->
<template>
  <button
    class="rounded border-0 bg-brand-blue-1 px-4 py-2.5 font-medium text-white hover:shadow-blue"
  >
    {{ text }}
  </button>
</template>

<script>
  export default {
    name: "ActionButton",
    props: ["text"], // Props are supposed to be listed in an array
  };
</script>
```
