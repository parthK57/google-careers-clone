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
  props: ["text"],
};
</script>
